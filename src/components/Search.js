import React, { Component } from 'react';
import Repos from './Repos';

class Search extends Component {
  state = { 
    query: '',
    search: ''
  };

  handleSearch = () => {
    this.setState({ search: this.search.value });
  };

  handleQuery = (e) => {
    e.preventDefault();
    this.setState({ query: this.state.search });
  };

  render() {
    const { query } = this.state;

    return (
      <React.Fragment>
        <section className="search">
          <form className="search__form">
            <input 
              className="search__input" 
              onChange={this.handleSearch} 
              ref={input => this.search = input} 
              placeholder="Username"
            />
            <button className="search__button" onClick={this.handleQuery}>Search</button>
          </form>
        </section>
        {!!query && 
          <Repos query={query} endpoint={'repos'} />
        }
      </React.Fragment>
    );
  }
}

export default Search;