import React from 'react';

class Copyright extends React.Component {
  state = {
    copyrightYear: 2019,
    currentYear: undefined
  };

  componentDidMount() {
    let year = new Date().getFullYear();
    if (year != this.state.copyrightYear) {
      this.setState({ currentYear: year });
    }
  }

  render() {
    return (
      <footer>
        <p className="copyright">
          {'© ' + this.state.copyrightYear}
          {this.state.currentYear && '-' + this.state.currentYear}
          {' '} 
          <a className="copyright__link" href="https://github.com/gunnarjohnson" target="_blank">Gunnar Johnson</a>
        </p>
      </footer>
    );
  }
}

export default Copyright;