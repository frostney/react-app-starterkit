import { expect } from 'chai';

import { render } from 'enzyme';

import { About } from 'screens';

import React from 'react';

describe('About', () => {
  it('should create a new instance of About', () => {
    const wrapper = render(<About />);

    expect(wrapper).to.be.ok;
  });
});
