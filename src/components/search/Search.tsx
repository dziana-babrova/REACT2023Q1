import { LocalStorageKeys } from 'consts/localStorageKeys';
import React from 'react';
import { CardProps } from 'components/cards/Card';

import './search.scss';
import { getCharacters } from 'services/ApiService';

type SearchProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setCards: React.Dispatch<React.SetStateAction<CardProps[]>>;
};

const Search = ({ searchValue, setSearchValue, setCards }: SearchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    window.localStorage.setItem(LocalStorageKeys.search, searchValue);
    getCharacters(setCards, searchValue);
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
      <input className="search__button" type="submit" value="search" />
    </form>
  );
};

export { Search };
