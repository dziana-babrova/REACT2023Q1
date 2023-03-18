import React from 'react';

type searchProps = {
  submitValue: string;
};

type searchState = {
  value: string;
};

class Search extends React.Component<searchProps, searchState> {
  constructor(props: searchProps) {
    super(props);
    this.state = { value: this.getSearchValueFromLS() };
    window.addEventListener('beforeunload', this.setSearchVAlueToLS.bind(this));
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" name="name" value={value} onChange={this.handleChange.bind(this)} />
        <input type="submit" value={this.props.submitValue} />
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
