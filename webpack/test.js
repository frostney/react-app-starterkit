import deepExtend from 'deep-extend';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import base from './base';

const testConfig = deepExtend({}, base, {
  cache: true,
  devtool: 'eval-source-map',
});

const cssModules = 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';

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
  loaders: [{
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style', cssModules),
  }, {
    test: /\.less/,
    loader: ExtractTextPlugin.extract('style', `${cssModules}!less`),
  }, {
    test: /\.(png|jpg|gif|woff|woff2)$/,
    loader: 'null-loader',
  }],
};

testConfig.plugins = [
  new ExtractTextPlugin('style.css'),
];

export default testConfig;
