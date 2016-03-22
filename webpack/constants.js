import path from 'path';

module.exports = {
  src: path.resolve(__dirname, '..', 'src'),
  outputPath: path.resolve(__dirname, '..', 'dist', 'assets'),
  entry: path.resolve(__dirname, '..', 'src', 'base', 'main.js'),
  publicPath: '/assets/',
  outputFilename: 'main.js',
  port: 8888,
};
