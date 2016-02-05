import { expect } from 'chai';

import { render } from 'enzyme';

import { About } from 'screens';

import React from 'react';

describe('About', () => {
  it('should create a new instance of About', () => {
    const container = document.createElement('container');
    container.id = 'content';
    document.body.appendChild(container);

    const component = React.createElement(About);

    expect(component).to.be.ok;
  });
});
