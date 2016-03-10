import ExtractTextPlugin from 'extract-text-webpack-plugin';

const cssModules = 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';

export default [{
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style', `${cssModules}!postcss`),
}, {
  test: /\.less$/,
  loader: ExtractTextPlugin.extract('style', `${cssModules}!less!postcss`),
}, {
  test: /\.(png|jpg|gif|woff|woff2)$/,
  loader: 'url-loader?limit=8192',
}, {
  test: /\.json$/,
  loader: 'json',
}];
