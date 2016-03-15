import css from './css';

export default [].concat(css, [{
  test: /\.(png|jpg|gif|woff|woff2)$/,
  loader: 'url-loader?limit=8192',
}, {
  test: /\.json$/,
  loader: 'json',
}]);
