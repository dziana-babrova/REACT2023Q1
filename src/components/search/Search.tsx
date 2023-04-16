import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from 'state/store/Store';
import { fetchCharacters } from 'state/reducers/CharactersReducer';
import { getSearchValue, change } from 'state/reducers/SearchReducer';

import './search.scss';

const Search = () => {
  const search = useSelector(getSearchValue);
  const [currentSearchValue, setCurrentSearchValue] = useState(search);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCharacters(search));
  }, [dispatch, search]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearchValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(change(currentSearchValue));
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
