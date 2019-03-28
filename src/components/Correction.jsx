import React, { Component } from 'react';

class Correction extends Component {
  render() {
    const { text } = this.props;

    return (
      <b>
        <div>CORRECTION</div>
        {text}
      </b>
    );
  }
}

export default Correction;