// Polyfills
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, hashHistory } from 'react-router';

import routes from './routes';

import 'styles/main.less';

const content = document.getElementById('content');

ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, content);
