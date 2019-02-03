import React, { Component } from 'react';
import withGitHubData from './withGitHubData';

class Languages extends Component {
  render() {
    const languages = Object.keys(this.props.github);

    return (
      <div className="languages">
        {!!languages ? (
          languages.map((language, i) => (
            <p className={"languages__content languages__content--" + language.toLowerCase()} key={i}>{language}</p>
        ))) : (
          <p className="languages__content languages__content--none">No Languages Found</p>
        )}
      </div>
    );
  }
}

const url = '';
const WrappedComponent = withGitHubData(url)(Languages);

export default WrappedComponent;