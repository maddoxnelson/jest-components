import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from './Text';
import Header from './Header';
import Oembed_Response from './Oembed_Response';
import Image from './Image';

class Body extends Component {

  renderContentElement(element) {

    const { type } = element;

    switch(type){
      case "text":
        return <Text content={element.content} />;
      case "header":
        return <Header content={element.content} level={element.level} />;
      case "image":
        return <image content={element.url} />;
      case "oembed_response":
        return <Oembed_Response html={element.raw_oembed.html} />;
      default:
        return null;
    }
  }

  render() {
    const { data: content_elements } = this.props;

    return (
      content_elements.map(content_element => this.renderContentElement(content_element))
    );
  }
}

Body.propTypes = {
  content_elements: PropTypes.array
}

export default Body;