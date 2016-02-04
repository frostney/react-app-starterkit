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
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
