export default [{
  test: /\.(png|jpg|gif|woff|woff2)$/,
  loader: 'url-loader?limit=8192',
}, {
  test: /\.json$/,
  loader: 'json',
}];
