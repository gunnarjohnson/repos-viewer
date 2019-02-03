import React from 'react';

class Footer extends React.Component {
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
      <footer className="footer">
        <p className="footer__copyright">
          {'© ' + this.state.copyrightYear}
          {this.state.currentYear && '-' + this.state.currentYear}
          {' '} 
          <a className="footer__copyright-link" href="https://github.com/gunnarjohnson" target="_blank">Gunnar Johnson</a>
        </p>
      </footer>
    );
  }
}

export default Footer;