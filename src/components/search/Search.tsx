import { LocalStorageKeys } from 'consts/localStorageKeys';
import React from 'react';
import { SearchProps, SearchState } from 'types/types';

import './search.scss';

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { value: this.getSearchValueFromLS() };
    window.addEventListener('beforeunload', this.setSearchVAlueToLS.bind(this));
  }

  render() {
    const { value } = this.state;
    const { submitValue } = this.props;
    return (
      <form role="search" className="search__form" onSubmit={this.handleSubmit.bind(this)}>
        <input
          className="search__field"
          type="search"
          name="name"
          value={value}
          onChange={this.handleChange.bind(this)}
        />
        <input className="search__button" type="submit" value={submitValue} />
      </form>
    );
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  componentWillUnmount() {
    this.setSearchVAlueToLS.call(this);
  }

  getSearchValueFromLS() {
    return window.localStorage.getItem(LocalStorageKeys.search) || '';
  }

  setSearchVAlueToLS() {
    window.localStorage.setItem(LocalStorageKeys.search, this.state.value);
  }
}

export { Search };
