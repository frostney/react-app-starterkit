import React, { Component } from 'react';
import { tower } from 'images';

class MyComponent extends Component {
  render() {
    return (
      <div styleName="container">
        <div styleName="rectangle">Hello World!</div>
        <img src={tower} width={128} height={128} />
      </div>
    );
  }
}

export default MyComponent;
