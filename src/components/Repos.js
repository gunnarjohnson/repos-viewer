import React from 'react';
import withGitHubData from './withGitHubData';
import ReposView from './ReposView';

const Repos = (props) => {
  const { github, isLoading, error } = props;

  const sliceRepos = (repos) => (
    repos.slice(0, 6)
  );

  return (
    <section className="repos">
      {isLoading && (
        <p className="repos__content content">Loading...</p>
      )}
      {!!error && (
        <p className="repos__content content">Something went wrong.</p>
      )}
      {!!github[0] && (
        <ReposView repos={sliceRepos(github)} /> 
      )}
      {!error && !isLoading && !github[0] && (
        <p className="repos__content content">No repositories found.</p>
      )}
    </section>
  );
}

const WrappedComponent = withGitHubData(Repos);

export default WrappedComponent;