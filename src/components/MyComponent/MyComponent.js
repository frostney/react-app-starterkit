import React from 'react';
import { tower } from 'images';

const MyComponent = () => (
  <div styleName="container">
    <div styleName="rectangle">Hello World!</div>
    <img src={tower} width={128} height={128} />
  </div>
);

export default MyComponent;
