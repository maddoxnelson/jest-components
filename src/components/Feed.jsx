import React, { Component } from 'react';
import { Story } from '@arc-core-components/tools_mock-ans';
import Headline from './Headline';

const stories = [
  new Story(),
  new Story(),
  new Story(),
  new Story(),
  new Story(),
  new Story(),
  new Story(),
  new Story(),
  new Story(),
  new Story(),
  new Story()
]

class Feed extends Component {
  renderStoryCard(story, index) {
    return (
      <div className="card flex flex-row align-center">
        <span>{index + 1}</span>
        <Headline headlineLevel={4} headlineText={story.headlines.basic} />
      </div>
    )
  }

  render() {
    return (
      <div>
        {stories.map((story, index) => this.renderStoryCard(story, index))}
      </div>
    );
  }
}

export default Feed;