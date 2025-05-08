const config = {
  '*': ['prettier --write --cache --ignore-unknown .'],
  'src/**/*.ts': ['eslint --cache --fix'],
};

export default config;
