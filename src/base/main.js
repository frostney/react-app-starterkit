// Polyfills
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router';

import createHashHistory from 'history/lib/createHashHistory';
import routes from './routes';

import 'styles/main.less';

const history = createHashHistory();

const content = document.getElementById('content');

ReactDOM.render(<Router history={history}>{routes}</Router>, content);
