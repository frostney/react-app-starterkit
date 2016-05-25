import webpack from 'webpack';
import deepExtend from 'deep-extend';

import { extractCSS, extractCSSModules } from './extracts';

import constants from './constants';
import base from './base';

import { preLoaders, defaultLoaders } from './loaders';
import { extractStyles } from './loaders/css';

const distConfig = deepExtend({}, base, {
  entry: constants.entry,
  cache: false,
  debug: false,
  devtool: '#hidden-source-map',
});

distConfig.module = {
  preLoaders,
  loaders: [].concat(defaultLoaders, extractStyles, [{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel',
  }]),
};

distConfig.plugins = [
  extractCSS,
  extractCSSModules,
  new webpack.optimize.DedupePlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.NoErrorsPlugin(),
];

export default distConfig;
