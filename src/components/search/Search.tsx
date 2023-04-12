import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchValue, change } from 'reducers/SearchReducer';

import './search.scss';

type SearchProps = {
  onSubmit: () => Promise<void>;
};

const Search = ({ onSubmit }: SearchProps) => {
  const search = useSelector(getSearchValue);
  const [currentSearchValue, setCurrentSearchValue] = useState(search);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearchValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(change(currentSearchValue));
    onSubmit();
  };

  return (
    <form role="search" className="search__form" onSubmit={handleSubmit.bind(this)}>
      <input
        className="search__field"
        type="search"
        name="name"
        value={currentSearchValue}
        onChange={handleChange}
      />
      <input className="search__button" type="submit" value="search" />
    </form>
  );
};

export { Search };
