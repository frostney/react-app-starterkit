import constants from './constants';
import autoprefixer from 'autoprefixer';

export default {
  output: {
    path: constants.outputPath,
    filename: constants.outputFilename,
    publicPath: constants.publicPath,
  },
  stats: {
    colors: true,
    reasons: false,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      root: constants.src,
    },
  },
  postcss: [autoprefixer],
};
