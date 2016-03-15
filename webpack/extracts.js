import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractCSSModules = new ExtractTextPlugin('style-modules.css');
const extractCSS = new ExtractTextPlugin('style-global.css');

export { extractCSSModules, extractCSS };
