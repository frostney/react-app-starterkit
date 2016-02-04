export default [{
  test: /\.css$/,
  loader: 'style-loader!css-loader',
}, {
  test: /\.less/,
  loader: 'style-loader!css-loader!less-loader',
}, {
  test: /\.(png|jpg|gif|woff|woff2)$/,
  loader: 'url-loader?limit=8192',
}];
