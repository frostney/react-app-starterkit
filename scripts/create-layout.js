import fs from 'fs';
import minimist from 'minimist';
import mkdirp from 'mkdirp';

const argv = minimist(process.argv.slice(2));

const layoutName = argv._[0];

const directory = `src/layouts/${layoutName}`;
mkdirp.sync(directory);

fs.writeFileSync(`${directory}/README.md`, `This is ${layoutName}`);
fs.writeFileSync(`${directory}/styles.less`,
`.container {
  margin: 20px;
}
`);

fs.writeFileSync(`${directory}/index.js`,
`import withCSSModules from 'react-css-modules';

import ${layoutName} from './${layoutName}';
import styles from './styles.less';

export default withCSSModules(${layoutName}, styles);
`);

fs.writeFileSync(`${directory}/${layoutName}.js`,
`import React from 'react';

const ${layoutName} = () => (
  <div styleName="container" />
);

export default ${layoutName};
`);

fs.writeFileSync(`${directory}/${layoutName}.test.js`,
`import React from 'react';
import test from 'ava';

import { shallow } from 'enzyme';

import ${layoutName} from './${layoutName}';

test(t => {
  const wrapper = shallow(<${layoutName} />);

  t.truthy(wrapper);
});
`);
