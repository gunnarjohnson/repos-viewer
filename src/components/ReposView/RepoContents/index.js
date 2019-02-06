import React from 'react';
import withGitHubData from '../../withGitHubData';
import Items from './Items';

const RepoContents = (props) => {
  const { github, isLoading, error, repoName, htmlURL, resetView } = props;

  return (
    <div className="repo-contents">
      {isLoading && (
        <p className="repo-contents__content content">Loading...</p>
      )}
      {!!error && (
        <React.Fragment>
          <p className="repo-contents__content content">Something went wrong.</p>
          <button className="repo-contents__button" onClick={resetView}>Back to Search Results</button>
        </React.Fragment>
      )}
      {!!github[0] && (
        <Items contents={github} repo={repoName} url={htmlURL} reset={resetView} />
      )}
    </div>
  );
}

const WrappedComponent = withGitHubData(RepoContents);

export default WrappedComponent;