import React from 'react';
import withGitHubData from '../../withGitHubData';
import Items from './Items';

const RepoContents = (props) => {
  const { github, isLoading, error, repoName, resetView } = props;

  return (
    <div className="repo-contents">
      {isLoading && (
        <p className="repo-contents__content content">Loading...</p>
      )}
      {!!error && (
        <p className="repo-contents__content content">Something went wrong.</p>
      )}
      {!!github[0] && (
        <Items contents={github} repo={repoName} reset={resetView}/>
      )}
      {!error && !isLoading && !github[0] && (
        <p className="repo-contents__content content">This repository is empty.</p>
      )}
    </div>
  );
}

const WrappedComponent = withGitHubData(RepoContents);

export default WrappedComponent;