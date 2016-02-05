import { expect } from 'chai';

import { render } from 'enzyme';

import { MyComponent } from 'components';

import React from 'react';

describe('MyComponent', () => {
  it('should create a new instance of MyComponent', () => {
    const wrapper = render(<MyComponent />);

    expect(wrapper).to.be.ok;
  });

  it('renders two divs', () => {
    const wrapper = render(<MyComponent />);
    expect(wrapper.find('div').length).to.equal(2);
  });
});
