import React from 'react';
import test from 'ava';

import { shallow } from 'enzyme';

import MyComponent from './MyComponent';

test(t => {
  const wrapper = shallow(<MyComponent />);

  t.truthy(wrapper);
});
