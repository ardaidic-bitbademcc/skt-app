const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname; // packages/mobile

const config = getDefaultConfig(projectRoot);

// Mobile has its own isolated node_modules.
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
];

module.exports = config;
