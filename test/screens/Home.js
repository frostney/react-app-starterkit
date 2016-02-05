import { expect } from 'chai';

import { render } from 'enzyme';

import { Home } from 'screens';

import React from 'react';

describe('Home', () => {
  it('should create a new instance of Home', () => {
    const wrapper = render(<Home />);

    expect(wrapper).to.be.ok;
  });
});
