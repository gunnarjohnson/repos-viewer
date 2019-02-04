import React from 'react';
import withGitHubData from './withGitHubData';
import Cards from './Cards';

const Repos = (props) => {
  const { github, isLoading, error } = props;

  return (
    <section className="repos">
      {isLoading && (
        <p className="repos__content">Loading...</p>
      )}
      {!!error && (
        <p className="repos__content">Something went wrong.</p>
      )}
      {!!github[0] && (
        <Cards repos={github} /> 
      )}
      {!error && !isLoading && !github[0] && (
        <p className="repos__content">No repositories found.</p>
      )}
    </section>
  );
}

const WrappedComponent = withGitHubData(Repos);

export default WrappedComponent;