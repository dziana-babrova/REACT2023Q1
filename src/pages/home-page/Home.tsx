import { CardsList } from 'components/cards/CardsList';
import { Search } from 'components/search/Search';
import { useEffect, useState, useRef } from 'react';
import { LocalStorageKeys } from 'consts/localStorageKeys';
import { CardProps } from 'components/cards/Card';
import { getCharacters } from 'services/ApiService';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState<string>(
    window.localStorage.getItem(LocalStorageKeys.search) || ''
  );
  const [cards, setCards] = useState<CardProps[]>([]);
  const searchRef = useRef<string>();

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    getCharacters(setCards, searchRef.current || '');
  }, [searchRef]);

  return (
    <main className="wrapper">
      <Search {...{ searchValue, setSearchValue, setCards }} />
      <CardsList {...{ cards }}></CardsList>
    </main>
  );
};

export { HomePage };
