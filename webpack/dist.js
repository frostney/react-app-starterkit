import webpack from 'webpack';
import deepExtend from 'deep-extend';

import constants from './constants';
import base from './base';

import { preLoaders, defaultLoaders } from './loaders';

const distConfig = deepExtend({}, base, {
  entry: constants.entry,
  cache: false,
  debug: false,
  devtool: '#hidden-source-map',
});

distConfig.module = {
  preLoaders,
  loaders: [].concat(defaultLoaders, [{
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
  }]),
};

distConfig.plugins = [
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
