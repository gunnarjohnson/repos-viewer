import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';

const Items = (props) => {
  const { contents, repo } = props;

  return (
    <div className="items">
      <h2 className="items__title">{repo}</h2>
      <ul className="items-list">
        {contents.map((item, i) => (
          <li className={"items-list__item items-list__item--" + item.type} key={i}>
            <FontAwesomeIcon 
              className={"items-list__icon items-list__icon--" + item.type}
              icon={item.type === 'dir' ? faFolder : faFile} 
            />
            <a 
              className={"items-list__link items-list__link--" + item.type} 
              href={item.html_url} 
              target="_blank"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <button className="items__button" onClick={props.reset}>Back to Search Results</button>
    </div>
  );
}

export default Items;