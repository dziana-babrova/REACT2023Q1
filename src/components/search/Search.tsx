import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from 'state/store/store';
import { getSearchValue, change } from 'state/reducers/searchReducer';

import './search.scss';

const Search = () => {
  const search = useSelector(getSearchValue);
  const searchRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  if (searchRef.current) searchRef.current.value = search;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (searchRef.current) dispatch(change(searchRef.current?.value));
  };

  return (
    <form role="search" className="search__form" onSubmit={handleSubmit.bind(this)}>
      <input className="search__field" type="search" name="name" ref={searchRef} />
      <input className="search__button" type="submit" value="search" />
    </form>
  );
};

export { Search };
