import React from 'react';
import withGitHubData from '../../withGitHubData';

const Languages = (props) => {
  const languages = Object.keys(props.github);

  const formatLanguage = (language) => (
    language.replace(/\s/g, '-').toLowerCase()
  );

  return (
    <div className="languages">
      {!!languages[0] ? (
        languages.map((language, i) => (
          <p className={"languages__content languages__content--" + formatLanguage(language)} key={i}>{language}</p>
      ))) : (
        <p className="languages__content languages__content--none">No Languages Found</p>
      )}
    </div>
  );
}

const WrappedComponent = withGitHubData(Languages);

export default WrappedComponent;