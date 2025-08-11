// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

// const {existsSync} = require('fs');
// const {execSync} = require('child_process');

// const folder = process.argv[2];
// const script = process.argv[3];

// const cmd = !existsSync(`${folder}/node_modules`) ? `yarn && yarn ${script}` : `yarn ${script}`;

// execSync(cmd, {
//   cwd: folder,
//   stdio: 'inherit'
// });

// const {execSync} = require('child_process');

// // Clone current environment
// const cleanEnv = {...process.env};

// // Delete problematic variables
// delete cleanEnv['ProgramFiles(x86)'];
// delete cleanEnv['CommonProgramFiles(x86)'];
// delete cleanEnv['ProgramFiles'];
// delete cleanEnv['CommonProgramFiles'];

// // Run yarn and then start:local with clean environment
// execSync('yarn && yarn start', {
//   stdio: 'inherit',
//   env: cleanEnv
// });

const {existsSync} = require('fs');
const {execSync} = require('child_process');

const folder = process.argv[2] || '.';
const script = process.argv[3] || 'start';

const cleanEnv = {...process.env};
delete cleanEnv['ProgramFiles(x86)'];
delete cleanEnv['CommonProgramFiles(x86)'];
delete cleanEnv['ProgramFiles'];
delete cleanEnv['CommonProgramFiles'];

const cmd = !existsSync(`${folder}/node_modules`) ? `yarn && yarn ${script}` : `yarn ${script}`;

execSync(cmd, {
  cwd: folder,
  stdio: 'inherit',
  env: cleanEnv
});
