import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractCSSModules = new ExtractTextPlugin('style-modules.css', {
  allChunks: true,
});
const extractCSS = new ExtractTextPlugin('style-global.css', {
  allChunks: true,
});

export { extractCSSModules, extractCSS };
