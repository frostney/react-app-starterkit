import { expect } from 'chai';

import { Home } from 'screens';

import React from 'react';

describe('Home', () => {
  it('should create a new instance of Home', () => {
    const container = document.createElement('container');
    container.id = 'content';
    document.body.appendChild(container);

    const component = React.createElement(Home);

    expect(component).to.be.ok;
  });
});
