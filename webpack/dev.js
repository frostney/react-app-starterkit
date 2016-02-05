import webpack from 'webpack';
import deepExtend from 'deep-extend';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import constants from './constants';
import base from './base';

import { preLoaders, defaultLoaders } from './loaders';

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

devConfig.module = {
  preLoaders,
  loaders: [].concat.call([], defaultLoaders, [{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'react-hot!babel',
  }]),
};

devConfig.plugins = [
  new ExtractTextPlugin('style.css'),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
];

export default devConfig;
