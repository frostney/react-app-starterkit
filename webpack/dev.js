import webpack from 'webpack';
import deepExtend from 'deep-extend';

import constants from './constants';
import base from './base';

import { preLoaders, defaultLoaders } from './loaders';
import { includeStyles } from './loaders/css';

const devConfig = deepExtend({}, base, {
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: constants.port,
    publicPath: constants.publicPath,
    noInfo: false,
  },
  port: constants.port,
  entry: [
    `webpack-dev-server/client?http://127.0.0.1:${constants.port}`,
    'webpack/hot/only-dev-server',
    constants.entry,
  ],
  cache: true,
  devtool: 'eval-source-map',
});

const screenRegex = /screens\/([^\/]+\/?[^\/])\/index.(js|jsx)/;

devConfig.module = {
  preLoaders,
  loaders: [].concat.call([], defaultLoaders, includeStyles, [{
    test: /\.(js|jsx)$/,
    exclude: [
      /node_modules/,
      screenRegex,
    ],
    loader: 'react-hot!babel',
  }, {
    test: screenRegex,
    loader: 'bundle?lazy!react-hot!babel',
  }]),
};

devConfig.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
];

export default devConfig;
