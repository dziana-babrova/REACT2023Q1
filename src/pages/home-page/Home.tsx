import { CardsList } from 'components/cards/CardsList';
import { Search } from 'components/search/Search';
import { useState } from 'react';
import { LocalStorageKeys } from 'consts/localStorageKeys';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState(
    window.localStorage.getItem(LocalStorageKeys.search) || ''
  );
  const [cards, setCards] = useState([]);

  return (
    <main className="wrapper">
      <Search props={{ searchValue: searchValue, setSearchValue: setSearchValue }} />
      <CardsList></CardsList>
    </main>
  );
};

export { HomePage };
