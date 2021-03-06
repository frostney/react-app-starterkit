import constants from './constants';
import autoprefixer from 'autoprefixer';

export default {
  output: {
    path: constants.outputPath,
    chunkFilename: '[id].chunk.js',
    filename: constants.outputFilename,
    publicPath: constants.publicPath,
  },
  stats: {
    colors: true,
    reasons: false,
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    root: constants.src,
  },
  postcss: [autoprefixer],
};
