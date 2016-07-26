import React from 'react';

import { Route, IndexRoute } from 'react-router';

import { Home, About } from 'screens';

const NotFound = () => <h2>Not found</h2>;

const lazyLoadComponent = lazyModule =>
  (location, cb) => {
    lazyModule(module => cb(null, module));
  };

const routes = (
  <Route path="/">
    <IndexRoute getComponent={lazyLoadComponent(Home)} />
    <Route path="about" getComponent={lazyLoadComponent(About)} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
