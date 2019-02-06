import React, { Component } from 'react';
import Card from './Card';
import RepoContents from './RepoContents';

class ReposView extends Component {
  state = {
    view: true,
    repoURL: '',
    repoName: ''
  };

  formatName = (name) => (
    name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  );

  viewContents = (url, name) => {
    this.setState({ view: false, repoName: name, repoURL: url });
  };

  resetView = (e) => {
    e.preventDefault();
    this.setState({ view: true, repoName: '', repoURL: '' });
  };
  
  render() {
    const { repos } = this.props;
    const { view, repoURL, repoName } = this.state;

    return (
      view ? ( 
        <div className="cards">
          {repos.map((repo, i) => (
            i < 6 && (
              <Card 
                repoDescription={!!repo.description && this.formatName(repo.description)} 
                repoLanguages={repo.languages_url} 
                repoName={this.formatName(repo.name)} 
                viewContents={() => this.viewContents(repo.url, this.formatName(repo.name))} 
                key={i} 
              />
          )))}
        </div>
      ) : (
        <RepoContents query={repoURL} endpoint={'contents'} repoName={repoName} resetView={this.resetView} />
      )
    );
  }
}

export default ReposView;