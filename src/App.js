import React, { Component, Fragment } from 'react';
import { Story } from '@arc-core-components/tools_mock-ans';
import Headline from './components/Headline';
import Body from './components/Body';
import Feed from './components/Feed';
import Ad from './components/Ad/Ad';
import Correction from './components/Correction';
import { cubeAd, leaderboardAd } from './components/Ad/adConfigs';
import Masthead from './components/Masthead';

import './App.css';

class App extends Component {
  render() {

    const globalContent = new Story();

    const { canonical_url, headlines, content_elements, subheadlines = {
      basic: "Some test subheadlines coming through the pike"
    } } = globalContent;

    return (
      <Fragment>
        <div className="App">
          <Masthead />
          <Ad {...leaderboardAd} />
        </div>
      
        <div className="App flex flex-row spaced">
          <div className="flex flex-column width-75">
            <Headline
              headlineText={headlines.basic}
              headlineLevel={1}
              subheadlineText={subheadlines.basic}
              url={canonical_url}
              headlineClasses="header-fancy"
              subheadlineClasses="intense"
            />
            <Body data={content_elements}/>
          </div>
          <div className="width-25">
            <Ad {...cubeAd} />
            <div className="card light shadow">
              <Headline headlineText="Most Popular" headlineLevel={2} />
              <Feed />
            </div>
            <div className="spaced card light shadow">
              <Correction text="We would like to issue a clarification." />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
