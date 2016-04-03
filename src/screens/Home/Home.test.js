import test from 'ava';

import { render } from 'enzyme';

import Home from './Home';

test(t => {
  const wrapper = render(<Home />);

  t.ok(wrapper);
});
