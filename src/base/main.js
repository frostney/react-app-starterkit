import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

import 'styles/main.less';

const history = createBrowserHistory();

const content = document.getElementById('content');

ReactDOM.render(<Router history={history}>{routes}</Router>, content);
