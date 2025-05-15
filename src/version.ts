import { execSync } from 'child_process';
import { logger } from './utils/logger.js';
import packageJson from '../package.json';
import { generateTimezones } from './generateTimezones.js';

export const getNewVersion = (currentVersion: string): `${string}.${string}.${string}` => {
  const parts = currentVersion.split('.').map(Number);
  if (parts.length !== 3 || parts.some(isNaN) || parts.some((part) => part < 0)) {
    throw new Error(
      `Invalid version string format: "${currentVersion}". Expected X.Y.Z where X, Y, Z are non-negative integers.`,
    );
  }
  let [major, minor, patch] = parts;

  patch! += 1;
  if (patch! >= 10) {
    patch = 0;
    minor! += 1;
    if (minor! >= 10) {
      minor = 0;
      major! += 1;
    }
  }

  return `${major}.${minor}.${patch}`;
};

const genVersion = async (): Promise<'SKIP' | 'SUCCESS'> => {
  const commitSha = process.env.ORIGINAL_COMMIT_SHA || execSync('git rev-parse HEAD').toString().trim();
  const commitMessage =
    process.env.ORIGINAL_COMMIT_MESSAGE?.replace(/\n/g, ' ') || execSync('git log -1 --pretty=%B').toString().trim();

  const packageName = packageJson.name;
  const currentVersion = packageJson.version;
  const newVersion = getNewVersion(currentVersion);

  logger.info(`[${packageName}] Starting versioning process.`, { currentVersion, newVersion });

  const commitsToCompare = `HEAD~1 HEAD`;
  const checkDiffCmd = `git diff ${commitsToCompare} -- timezones.ts`;
  logger.debug(`[${packageName}] Checking for timezones.ts changes.`, { command: checkDiffCmd });
  const diffOutput = execSync(checkDiffCmd, { stdio: 'pipe' }).toString().trim() || null;
  const forceVersion = commitMessage.includes('[force]');
  if (!diffOutput && !forceVersion) {
    logger.info(`[${packageName}] timezones.ts has no changes between ${commitsToCompare}. Skipping versioning.`);
    return 'SKIP';
  }

  if (diffOutput) {
    logger.info(`[${packageName}] timezones.ts has changes between ${commitsToCompare}. Proceeding with versioning.`, {
      diffOutput,
    });
  }

  if (forceVersion) {
    logger.info(`[${packageName}] Proceeding with force versioning.`);
  }

  execSync(`npm version ${newVersion} --no-git-tag-version`).toString();
  logger.info(`[${packageName}] Bumped package.json version.`);

  await generateTimezones();

  if (!process.env.CI) {
    logger.info(`[${packageName}] Running outside CI environment. Skipping git add, commit, tag, push.`);
    return 'SKIP';
  }

  try {
    const addCmd = 'git add .';
    logger.debug(`[${packageName}] Staging changes.`, { command: addCmd });
    execSync(addCmd);
    const sanitizedCommitMessage = forceVersion ? commitMessage.replace('[force]', '') : commitMessage;
    const commit = `Updated ${currentVersion} -> ${newVersion}, ${sanitizedCommitMessage}, ${commitSha}`;
    execSync(`git commit -m "${commit}"`);
    logger.info(`[${packageName}] Commit created successfully.`, { commit });
  } catch (error) {
    logger.error(`[${packageName}] Error during git add or commit setup.`, {
      newVersion,
      errorDetails: error instanceof Error ? error.message : error,
    });
    throw error;
  }

  const tag = `${packageName}@${newVersion}`;
  const gitAnnotatedTagCmd = `git tag -a -m "Release version ${packageName}@${newVersion}" ${tag}`;
  try {
    execSync(gitAnnotatedTagCmd);
    logger.info(`[${packageName}] Git tag created successfully.`, { tag });
  } catch (tagError) {
    logger.warn(`[${packageName}] Failed to create git tag.`, {
      tag,
      command: gitAnnotatedTagCmd,
      errorDetails: tagError instanceof Error ? tagError.message : tagError,
    });
  }

  try {
    const pushCmd = 'git push origin HEAD --follow-tags --force-with-lease';
    const pushBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
    logger.info(`[${packageName}] Pushing commit and tags.`, {
      branch: pushBranch,
      tags: true,
      forceWithLease: true,
      command: pushCmd,
    });
    execSync(pushCmd);
    logger.info(`[${packageName}] Push successful.`, { branch: pushBranch });
  } catch (error) {
    logger.error(`[${packageName}] Error pushing commit and tags.`, {
      errorDetails: error instanceof Error ? error.message : error,
    });
    throw error;
  }

  logger.debug(`[${packageName}] Versioning process completed.`, { finalVersion: newVersion });
  return 'SUCCESS';
};

const resultToStdout = await genVersion();
console.log(resultToStdout);
