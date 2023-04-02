import { CardsList } from 'components/cards/CardsList';
import { Search } from 'components/search/Search';
import { useEffect, useState } from 'react';
import { LocalStorageKeys } from 'consts/localStorageKeys';
import { CardProps } from 'components/cards/Card';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState(
    window.localStorage.getItem(LocalStorageKeys.search) || ''
  );
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCards(data.results));
  }, []);

  return (
    <main className="wrapper">
      <Search {...{ searchValue, setSearchValue }} />
      {cards && <CardsList cards={cards}></CardsList>}
    </main>
  );
};

export { HomePage };
