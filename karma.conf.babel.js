import webpackConfig from './webpack.config.babel';

export default config => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'test/**/*.js',
    ],
    preprocessors: {
      'test/**/*.js': ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/',
    },

    webpackServer: {
      noInfo: true,
    },

    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: false,
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],
    captureTimeout: 60000,
    singleRun: true,
  });
};
