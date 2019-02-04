import React from 'react';
import Languages from './Languages';

const Cards = (props) => {
  const formatName = (name) => (
    name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  );

  return (
    <div className="cards">
      {props.repos.map((repo, i) => (
        i < 6 && (
          <div className="cards-repo" key={i}>
            <h2 className="cards-repo__name">{formatName(repo.name)}</h2>
            <p className="cards-repo__description">
              {!!repo.description ? formatName(repo.description) : 'No description.'}
            </p>
            <Languages query={repo.languages_url} endpoint={'languages'} />
          </div>
      )))}
    </div>
  );
}

export default Cards;