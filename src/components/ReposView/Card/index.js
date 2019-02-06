import React from 'react';
import Languages from './Languages';

const Card = (props) => {
  const { repoDescription, repoLanguages, repoName, viewContents } = props;

  return(
    <div className="cards-repo" onClick={viewContents}>
      <h2 className="cards-repo__name">{repoName}</h2>
      <p className="cards-repo__description">
        {!!repoDescription ? repoDescription : 'No description.'}
      </p>
      {<Languages query={repoLanguages} endpoint={'languages'} />}
    </div>
  );
}

export default Card;