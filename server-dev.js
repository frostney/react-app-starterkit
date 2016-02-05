/* eslint no-console: 0 */

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config.babel';
import open from 'open';

const webpackServer = new WebpackDevServer(webpack(config), config.devServer);

webpackServer.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at localhost: ${config.devServer.port}`);
  console.log('Opening your system browser...');
  open(`http://localhost:${config.devServer.port}/webpack-dev-server/`);
});
