import { CardsList } from 'components/cards/CardsList';
import { Search } from 'components/search/Search';
import { useEffect, useState } from 'react';
import { LocalStorageKeys } from 'consts/localStorageKeys';
import { CardProps } from 'components/cards/Card';
import { getCharacters } from 'services/ApiService';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    setSearchValue(window.localStorage.getItem(LocalStorageKeys.search) || '');
  }, []);

  useEffect(() => {
    // getCharacters(setCards, searchValue);
    fetch(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
      .then((response) => response.json())
      .then((data) => setCards(data.results));
  }, []);

  return (
    <main className="wrapper">
      <Search {...{ searchValue, setSearchValue, setCards, cards }} />
      <CardsList {...{ cards }}></CardsList>
    </main>
  );
};

export { HomePage };
