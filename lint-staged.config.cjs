module.exports = {
  '**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts,mdx}': ['prettier --write'],
};

module.exports = {
  '**/*/package.json': ['npm run precommit'],
};
