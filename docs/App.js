import React, { Component } from 'react';
import Switch from '../dist';

class App extends Component {

  onChange = (value) => {
    console.log(value);
  }

  render() {
    return (
      <Switch
        id={'switch'}
        checked={true}
        onChange={this.onChange}
      />
    );
  }
}
export default App;
