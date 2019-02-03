import React, { Component } from 'react';

const withGitHubData = (url) => (WrappedComponent) => {
  class WithGitHubData extends Component {
    state = {
      github: [],
      isLoading: false,
      error: false
    };

    fetchData = () => {
      this.setState({ isLoading: true });
      let urlGitHub = url;

      if (!!this.props.languagesURL) {
        urlGitHub = this.props.languagesURL;
      }

      fetch(urlGitHub)
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
      this.fetchData();
    }

    render() {
      return (<WrappedComponent {...this.state} languagesURL={this.props.languagesURL} />);
    }
  }

  WithGitHubData.displayName = `withGitHubData(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return WithGitHubData;
}

export default withGitHubData;