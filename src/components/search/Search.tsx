import React from 'react';

import './search.scss';

type SearchProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => Promise<void>;
};

const Search = ({ searchValue, setSearchValue, onSubmit }: SearchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit();
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
