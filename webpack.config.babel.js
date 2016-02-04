import path from 'path';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

// List of allowed environments
const allowedEnvs = ['dev', 'dist', 'test'];

// Set the correct environment
let env;
if (args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test';
} else if (args.env) {
  env = args.env;
} else {
  env = 'dev';
}
process.env.REACT_WEBPACK_ENV = env;

const configFolder = 'webpack';

// Get available configurations
const configs = {
  base: require(path.join(__dirname, configFolder, 'base')),
  dev: require(path.join(__dirname, configFolder, 'dev')),
  dist: require(path.join(__dirname, configFolder, 'dist')),
  test: require(path.join(__dirname, configFolder, 'test')),
};

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
function buildConfig(wantedEnv) {
  const isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
  const validEnv = isValid ? wantedEnv : 'dev';
  return configs[validEnv];
}

export default buildConfig(env);
