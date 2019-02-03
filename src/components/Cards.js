import React, { Component } from 'react';
import Languages from './Languages';

class Cards extends Component {
  formatName = (name) => {
    let newName = name.split('-');
    newName = newName.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return newName;
  }

  render() {
    return (
      <div className="cards">
        {this.props.repos.map((repo, i) => (
          i < 6 && (
            <div className="cards-repo" key={i}>
              <h2 className="cards-repo__name">{this.formatName(repo.name)}</h2>
              <p className="cards-repo__description">{this.formatName(repo.description)}</p>
              <Languages languagesURL={repo.languages_url} />
            </div>
        )))}
      </div>
    );
  }
}

export default Cards;