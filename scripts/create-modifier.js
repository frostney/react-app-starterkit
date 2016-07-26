import fs from 'fs';
import minimist from 'minimist';
import mkdirp from 'mkdirp';

const argv = minimist(process.argv.slice(2));

const modifierName = argv._[0];

const directory = `src/modifiers/${modifierName}`;
mkdirp.sync(directory);

fs.writeFileSync(`${directory}/README.md`, `This is ${modifierName}`);

fs.writeFileSync(`${directory}/index.js`,
`import ${modifierName} from './${modifierName}';

export default ${modifierName};
`);

fs.writeFileSync(`${directory}/${modifierName}.js`,
`import React, { Component } from 'react';

const ${modifierName} = Comp =>
  class extends Component {
    constructor(props) {
      super(props);

      this.state = {};
    }

    render() {
      return <Comp {...this.props} />;
    }
  };

export default ${modifierName};
`);

fs.writeFileSync(`${directory}/${modifierName}.test.js`,
`import React from 'react';
import test from 'ava';

import { shallow } from 'enzyme';

import ${modifierName} from './${modifierName}';

const MyComponent = () => <div />;
const ModifiedComponent = ${modifierName}(MyComponent);

test(t => {
  const wrapper = shallow(<ModifiedComponent />);

  t.truthy(wrapper);
});
`);
