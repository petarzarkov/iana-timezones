import { execSync } from 'child_process';
import { logger } from './utils/logger.js';
import packageJson from '../package.json';

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

const genVersion = async () => {
  const commitSha = process.env.ORIGINAL_COMMIT_SHA || execSync('git rev-parse HEAD').toString().trim();
  const commitMessage =
    process.env.ORIGINAL_COMMIT_MESSAGE?.replace(/\n/g, ' ') || execSync('git log -1 --pretty=%B').toString().trim();

  const packageName = packageJson.name;
  const currentVersion = packageJson.version;
  const newVersion = getNewVersion(currentVersion);

  logger.info(`[${packageName}] Starting versioning process.`, { currentVersion, newVersion });
  try {
    execSync(`npm version ${newVersion} --no-git-tag-version`).toString();
    logger.info(`[${packageName}] Bumped package.json version.`);
  } catch (error) {
    logger.error(`[${packageName}] Error during version update.`, {
      currentVersion,
      newVersion,
      errorDetails: error instanceof Error ? error.message : error,
    });
    throw error;
  }

  const generateCmd = 'pnpm run generate';
  try {
    logger.info(`[${packageName}] Running generate script.`, { command: generateCmd });
    execSync(generateCmd);
    logger.info(`[${packageName}] Generate script completed.`, { command: generateCmd });
  } catch (error) {
    logger.error(`[${packageName}] Error running generate script.`, {
      command: generateCmd,
      errorDetails: error instanceof Error ? error.message : error,
    });
    throw error;
  }

  if (process.env.CI) {
    try {
      const addCmd = 'git add .';
      logger.info(`[${packageName}] Staging changes.`, { command: addCmd });
      execSync(addCmd);

      const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
      const commitSubject = `[branch|${branch}] Version bump ${newVersion}`;
      const commitBody = `\n\nTriggered by commit:\nSHA: ${commitSha}\nMessage: ${commitMessage}`;
      const commitCmd = `git commit -m "${commitSubject}" -m "${commitBody}"`;

      logger.info(`[${packageName}] Creating commit.`, { subject: commitSubject, branch, commitSha, commitMessage });
      try {
        execSync(commitCmd);
        logger.info(`[${packageName}] Commit created successfully.`, { subject: commitSubject });
      } catch (commitError) {
        if (commitError instanceof Error && commitError.message.includes('nothing to commit')) {
          logger.warn(`[${packageName}] No changes to commit after generate script.`, { subject: commitSubject });
        } else {
          logger.error(`[${packageName}] Error creating commit.`, {
            subject: commitSubject,
            command: commitCmd,
            errorDetails: commitError instanceof Error ? commitError.message : commitError,
          });
          throw commitError;
        }
      }
    } catch (error) {
      logger.error(`[${packageName}] Error during git add or commit setup.`, {
        newVersion,
        errorDetails: error instanceof Error ? error.message : error,
      });
      throw error;
    }

    const gitTagCmd = `git tag ${packageName}@${newVersion}`;
    logger.info(`[${packageName}] Creating git tag.`, { tag: `${packageName}@${newVersion}`, command: gitTagCmd });
    try {
      execSync(gitTagCmd);
      logger.info(`[${packageName}] Git tag created successfully.`, { tag: `${packageName}@${newVersion}` });
    } catch (tagError) {
      logger.warn(`[${packageName}] Failed to create git tag.`, {
        tag: `${packageName}@${newVersion}`,
        command: gitTagCmd,
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
  } else {
    logger.info(`[${packageName}] Running outside CI environment. Skipping push.`);
  }

  logger.info(`[${packageName}] Versioning process completed successfully.`, { finalVersion: newVersion });
};

await genVersion();
