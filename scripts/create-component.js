import fs from 'fs';
import minimist from 'minimist';
import mkdirp from 'mkdirp';

const argv = minimist(process.argv.slice(2));

const componentName = argv._[0];

const directory = `src/components/${componentName}`;
mkdirp.sync(directory);

fs.writeFileSync(`${directory}/README.md`, `This is ${componentName}`);
fs.writeFileSync(`${directory}/styles.less`,
`.container {
  margin: 20px;
}
`);

fs.writeFileSync(`${directory}/index.js`,
`import withCSSModules from 'react-css-modules';

import ${componentName} from './${componentName}';
import styles from './styles.less';

export default withCSSModules(${componentName}, styles);
`);

fs.writeFileSync(`${directory}/${componentName}.js`,
`import React from 'react';

const ${componentName} = () => (
  <div styleName="container" />
);

export default ${componentName};
`);

fs.writeFileSync(`${directory}/${componentName}.test.js`,
`import React from 'react';
import test from 'ava';

import { shallow } from 'enzyme';

import ${componentName} from './${componentName}';

test(t => {
  const wrapper = shallow(<${componentName} />);

  t.truthy(wrapper);
});
`);
