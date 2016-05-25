import React from 'react';
import test from 'ava';

import { shallow } from 'enzyme';

import Home from './Home';

test(t => {
  const wrapper = shallow(<Home />);

  t.truthy(wrapper);
});
