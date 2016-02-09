import React, { Component } from 'react';
import { tower } from 'images';

class AsyncComponent extends Component {
  render() {
    return (
      <div styleName="container">
        <div styleName="rectangle">Hello World! (asynchronously)</div>
        <img src={tower} width={128} height={128} />
      </div>
    );
  }
}

export default AsyncComponent;
