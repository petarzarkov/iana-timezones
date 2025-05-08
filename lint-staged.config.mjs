const config = {
  '*': ['prettier --write --cache --ignore-unknown .'],
  'services/**/*.ts': ['eslint --cache --fix'],
};

export default config;
