import React, { Component } from 'react';

class Text extends Component {
  render() {
    const { content } = this.props;

    return (
      <p>
        {content}
      </p>
    );
  }
}

export default Text;