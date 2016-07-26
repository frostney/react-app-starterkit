import { extractCSS, extractCSSModules } from '../extracts';

const cssModules = 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';

const extractStyles = [{
  test: /styles\/.*\.css/,
  loader: extractCSS.extract('style', `${cssModules}!postcss`),
}, {
  test: /styles\/.*\.less/,
  loader: extractCSS.extract('style', 'css!less!postcss'),
}, {
  test: /(components|screens|layouts)\/.*\.less/,
  loader: extractCSSModules.extract('style', `${cssModules}!less!postcss`),
}, {
  test: /(components|screens|layouts)\/.*\.css/,
  loader: extractCSSModules.extract('style', `${cssModules}!postcss`),
}];

const includeStyles = [{
  test: /styles\/.*\.css/,
  loader: `style!${cssModules}!postcss`,
}, {
  test: /styles\/.*\.less/,
  loader: 'style!css!less!postcss',
}, {
  test: /(components|screens|layouts)\/.*\.less/,
  loader: `style!${cssModules}!less!postcss`,
}, {
  test: /(components|screens|layouts)\/.*\.css/,
  loader: `style!${cssModules}!postcss`,
}];

export { extractCSS, extractCSSModules, includeStyles, extractStyles };
