const config = {
  'src/**/*.ts': ['oxlint --fix', 'oxfmt --write'],
  '*.{ts,js,mjs,mts,cjs,cts,json}': ['oxfmt --write'],
};

export default config;
