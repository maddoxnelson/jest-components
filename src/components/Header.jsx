import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { content, level } = this.props;

    const LevelTag = `h${level}`;

    return (
      <LevelTag>
        {content}
      </LevelTag>
    );
  }
}

export default Header;