import React, { Component } from 'react';

const withGitHubData = (WrappedComponent) => {
  class WithGitHubData extends Component {
    state = {
      github: [],
      isLoading: false,
      error: false
    };

    fetchData = (query, endpoint) => {
      this.setState({ github: [], isLoading: true, error: false });

      let url;

      if (endpoint === 'repos') {
        url = 'https://api.github.com/users/' + query + '/' + endpoint;
      } else if (endpoint === 'languages') {
        url = query;
      } else {
        url = query + '/' + endpoint;
      }
      
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`Request rejected with status ${response.status}`)
          }
        })
        .then(data => this.setState({ github: data, isLoading: false }))
        .catch(error => this.setState({ error: error, isLoading: false }));
    };

    componentDidMount() {
      this.fetchData(this.props.query, this.props.endpoint);
    }

    componentDidUpdate(prevProps) {
      if (this.props.query !== prevProps.query) {
        this.fetchData(this.props.query, this.props.endpoint);
      }
    }

    render() {
      return (
        <WrappedComponent 
          {...this.state} 
          repoName={this.props.repoName} 
          htmlURL={this.props.htmlURL} 
          resetView={this.props.resetView} 
        />
      );
    }
  }

  WithGitHubData.displayName = `withGitHubData(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return WithGitHubData;
}

export default withGitHubData;