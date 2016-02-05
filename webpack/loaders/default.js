import ExtractTextPlugin from 'extract-text-webpack-plugin';

const cssModules = 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';

export default [{
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style', cssModules),
}, {
  test: /\.less/,
  loader: ExtractTextPlugin.extract('style', `${cssModules}!less`),
}, {
  test: /\.(png|jpg|gif|woff|woff2)$/,
  loader: 'url-loader?limit=8192',
}];
