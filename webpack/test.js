import deepExtend from 'deep-extend';

import { includeStyles } from './loaders/css';

import base from './base';

const testConfig = deepExtend({}, base, {
  cache: true,
  devtool: 'eval-source-map',
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty',
    child_process: 'empty',
  },
});

testConfig.module = {
  preLoaders: [{
    test: /\.js$/,
    loader: 'babel-istanbul',
    exclude: /(node_modules|test)/,
  }, {
    test: /\.js$/,
    loader: 'babel',
    exclude: /(node_modules|src)/,
  }],
  loaders: [].concat(includeStyles, [{
    test: /\.(png|jpg|gif|woff|woff2)$/,
    loader: 'null-loader',
  }, {
    test: /\.json$/,
    loader: 'json',
  }]),
};

export default testConfig;
