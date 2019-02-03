import React from 'react';
import withGitHubData from './withGitHubData';
import Cards from './Cards';

const Repos = (props) => (
  <section className="repos">
    {props.isLoading && (
      <p className="repos__content">Loading...</p>
    )}
    {!!props.error && (
      <p className="repos__content">Something went wrong.</p>
    )}
    {!!props.github[0] && (
      <Cards repos={props.github} /> 
    )}
  </section>
);

const url = 'https://api.github.com/users/gunnarjohnson/repos';
const WrappedComponent = withGitHubData(url)(Repos);

export default WrappedComponent;