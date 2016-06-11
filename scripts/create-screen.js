import fs from 'fs';
import minimist from 'minimist';
import mkdirp from 'mkdirp';

const argv = minimist(process.argv.slice(2));

const screenName = argv._[0];

const directory = `src/screens/${screenName}`;
mkdirp.sync(directory);

fs.writeFileSync(`${directory}/README.md`, `This is ${screenName}`);
fs.writeFileSync(`${directory}/styles.less`,
`.container {
  margin: 20px;
}
`);

fs.writeFileSync(`${directory}/index.js`,
`import withCSSModules from 'react-css-modules';

import ${screenName} from './${screenName}';
import styles from './styles.less';

export default withCSSModules(${screenName}, styles);
`);

fs.writeFileSync(`${directory}/${screenName}.js`,
`import React from 'react';

const ${screenName} = () => (
  <div styleName="container" />
);

export default ${screenName};
`);

fs.writeFileSync(`${directory}/${screenName}.test.js`,
`import React from 'react';
import test from 'ava';

import { shallow } from 'enzyme';

import ${screenName} from './${screenName}';

test(t => {
  const wrapper = shallow(<${screenName} />);

  t.truthy(wrapper);
});
`);
