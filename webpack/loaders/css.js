import { extractCSS, extractCSSModules } from '../extracts';

const cssModules = 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';

export { extractCSS, extractCSSModules };
export default [{
  test: /styles\/.*\.css/,
  loader: extractCSS.extract('style', `${cssModules}!postcss`),
}, {
  test: /styles\/.*\.less/,
  loader: extractCSS.extract('style', 'css!less'),
}, {
  test: /(components|screens)\/.*\.less/,
  loader: extractCSSModules.extract('style', `${cssModules}!less!postcss`),
}, {
  test: /(components|screens)\/.*\.css/,
  loader: extractCSSModules.extract('style', `${cssModules}!postcss`),
}];
