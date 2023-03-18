import React from 'react';
import { searchProps, searchState } from 'types/types';
import './search.scss';

class Search extends React.Component<searchProps, searchState> {
  constructor(props: searchProps) {
    super(props);
    this.state = { value: this.getSearchValueFromLS() };
    window.addEventListener('beforeunload', this.setSearchVAlueToLS.bind(this));
  }

  render() {
    const { value } = this.state;
    const { submitValue } = this.props;
    return (
      <form className="search__form" onSubmit={this.handleSubmit.bind(this)}>
        <input
          className="search__field"
          type="text"
          name="name"
          value={value}
          onChange={this.handleChange.bind(this)}
        />
        <input className="search__button" type="submit" value={submitValue} />
      </form>
    );
  }

  handleChange() {
    if (event && event.target && 'value' in event.target) {
      this.setState({ value: event.target.value as string });
    }
  }

  handleSubmit() {
    event?.preventDefault();
  }

  componentWillUnmount() {
    this.setSearchVAlueToLS.call(this);
  }

  getSearchValueFromLS() {
    return window.localStorage.getItem('searchValue') || '';
  }

  setSearchVAlueToLS() {
    window.localStorage.setItem('searchValue', this.state.value);
  }
}

export { Search };
