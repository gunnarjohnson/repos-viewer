import React from 'react';

class Footer extends React.Component {
  state = {
    currentYear: undefined
  };

  copyrightYear = 2019;

  componentDidMount() {
    const year = new Date().getFullYear();

    if (year !== this.copyrightYear) {
      this.setState({ currentYear: year });
    }
  }

  render() {
    return (
      <footer className="footer">
        <p className="footer__copyright">
          {'© ' + this.copyrightYear}
          {this.state.currentYear && (
            '-' + this.state.currentYear
          )}
          {' '} 
          <a className="footer__copyright-link" href="https://github.com/gunnarjohnson" target="_blank">Gunnar Johnson</a>
        </p>
      </footer>
    );
  }
}

export default Footer;