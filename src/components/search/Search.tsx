import { LocalStorageKeys } from 'consts/localStorageKeys';
import React, { useEffect, useRef, useState } from 'react';
import { SearchProps } from 'types/types';

import './search.scss';

const Search = (props: SearchProps) => {
  const [searchValue, setSearchValue] = useState(getSearchValueFromLS());
  const searchRef = useRef<string>();

  const { submitValue } = props;

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => {
      if (typeof searchRef.current !== 'string') return;
      window.localStorage.setItem(LocalStorageKeys.search, searchRef.current);
    };
  }, [searchRef]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form role="search" className="search__form" onSubmit={handleSubmit.bind(this)}>
      <input
        className="search__field"
        type="search"
        name="name"
        value={searchValue}
        onChange={handleChange}
      />
      <input className="search__button" type="submit" value={submitValue} />
    </form>
  );
};

function getSearchValueFromLS() {
  return window.localStorage.getItem(LocalStorageKeys.search) || '';
}

export { Search };
