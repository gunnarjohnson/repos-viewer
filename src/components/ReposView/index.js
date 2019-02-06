import React, { Component } from 'react';
import Card from './Card';
import RepoContents from './RepoContents';

class ReposView extends Component {
  state = {
    view: true,
    repoName: '',
    repoURL: '',
    htmlURL: ''
  };

  formatName = (name) => (
    name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  );

  resetView = (e) => {
    e.preventDefault();
    this.setState({ view: true, repoName: '', repoURL: '', htmlURL: '' });
  };

  viewContents = (repoName, repoURL, htmlURL) => {
    this.setState({ view: false, repoName: repoName, repoURL: repoURL, htmlURL: htmlURL });
  };
  
  render() {
    const { repos } = this.props;
    const { view, repoName, repoURL, htmlURL } = this.state;

    return (
      view ? ( 
        <div className="cards">
          {repos.map((repo, i) => (
            <Card 
              repoDescription={!!repo.description && this.formatName(repo.description)} 
              repoLanguages={repo.languages_url} 
              repoName={this.formatName(repo.name)} 
              viewContents={() => this.viewContents(this.formatName(repo.name), repo.url, repo.html_url)} 
              key={i} 
            />
          ))}
        </div>
      ) : (
        <RepoContents query={repoURL} endpoint={'contents'} repoName={repoName} htmlURL={htmlURL} resetView={this.resetView} />
      )
    );
  }
}

export default ReposView;