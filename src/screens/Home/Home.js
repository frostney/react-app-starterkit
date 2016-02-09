import React, { Component } from 'react';
import { MyComponent, AsyncComponent } from 'components';

class Home extends Component {
  render() {
    return (
      <div styleName="container">
        <MyComponent />
        <AsyncComponent />
      </div>
    );
  }
}

export default Home;
