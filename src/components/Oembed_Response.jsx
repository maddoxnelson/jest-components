import React, { Component } from 'react';

class Oembed_Response extends Component {
  render() {
    const { html } = this.props;

    return (
      <div dangerouslySetInnerHTML={{ __html: html }}>
      </div>
    );
  }
}

export default Oembed_Response;