import { LocalStorageKeys } from 'consts/localStorageKeys';
import React, { useEffect, useRef } from 'react';

import './search.scss';

type SearchProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const Search = (props: SearchProps) => {
  const searchRef = useRef<string>();

  useEffect(() => {
    searchRef.current = props.searchValue;
  }, [props.searchValue]);

  useEffect(() => {
    return () => {
      if (typeof searchRef.current !== 'string') return;
      window.localStorage.setItem(LocalStorageKeys.search, searchRef.current);
    };
  }, [searchRef]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearchValue(event.target.value);
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
        value={props.searchValue}
        onChange={handleChange}
      />
      <input className="search__button" type="submit" value="search" />
    </form>
  );
};

export { Search };
