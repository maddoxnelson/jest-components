import React, { Component } from 'react';
import Logo from './../images/Logo';

class Masthead extends Component {
  render() {
    return (
      <div className="App spaced flex flex-column align-center">
        <Logo />
        <i>Democracy Dies in Darkness</i>
        <hr className="width-100 height-5 rule" />
      </div>
    );
  }
}

export default Masthead;