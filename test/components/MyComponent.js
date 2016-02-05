import { expect } from 'chai';

import { MyComponent } from 'components';

import React from 'react';

describe('MyComponent', () => {
  it('should create a new instance of MyComponent', () => {
    const container = document.createElement('container');
    container.id = 'content';
    document.body.appendChild(container);

    const component = React.createElement(MyComponent);

    expect(component).to.be.ok;
  });
});
