import React, { Component } from 'react';
import Switch from '../dist';

class App extends Component {

  onChange = (event, status, id) => {
    console.log(event);
    console.log(status);
    console.log(id);
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
