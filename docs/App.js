import React, { Component } from 'react';
import Switch from '../dist';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: true
    }
  }

  onChange = (event, status, id) => {
    console.log(event);
    console.log(status);
    console.log(id);
  }

  render() {
    return (
      <Switch
        id={'switch'}
        checked={this.state.active}
        onChange={this.onChange}
      />
    );
  }
}
export default App;
