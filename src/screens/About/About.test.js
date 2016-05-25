import React from 'react';
import test from 'ava';

import { shallow } from 'enzyme';

import About from './About';

test(t => {
  const wrapper = shallow(<About />);

  t.truthy(wrapper);
});
