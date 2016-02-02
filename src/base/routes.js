import React, { Component } from 'react';

import { Route, IndexRoute } from 'react-router';

import { Home, About } from 'screens';

class NotFound extends Component {
  render() {
    return <h2>Not found</h2>;
  }
}

const routes = (
  <Route path="/">
    <IndexRoute component={Front} />
    <Route path="logout" component={About} />
    <Route path="account" component={HomeGrid} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
