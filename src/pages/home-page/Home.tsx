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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cards, setCards] = useState<CardProps[]>([]);
  const searchRef = useRef<string>();

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    const getData = async () => {
      setCards(await getCharacters(searchRef.current || ''));
      setTimeout(() => {
        console.log('loading');
      }, 10000);
      setIsLoading(false);
    };
    getData();
  }, [searchRef]);

  const onSubmit = async () => {
    setIsLoading(true);
    window.localStorage.setItem(LocalStorageKeys.search, searchValue);
    const data = await getCharacters(searchValue);
    setCards(data);
    setIsLoading(false);
  };

  return (
    <main className="wrapper">
      <Search {...{ searchValue, setSearchValue, onSubmit }} />
      {isLoading && <div>Loading...</div>}
      {cards.length > 0 && <CardsList {...{ cards }}></CardsList>}
    </main>
  );
};

export { HomePage };
