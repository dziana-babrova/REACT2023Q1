import { CardsList } from 'components/cards/CardsList';
import { Search } from 'components/search/Search';
import { useEffect, useState, useRef } from 'react';
import { LocalStorageKeys } from 'consts/localStorageKeys';
import { CardProps } from 'components/cards/Card';
import { getCharacters } from 'services/ApiService';
import { Loader } from 'components/loader/Loader';
import { Modal } from 'components/modal/Modal';
import './home.scss';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState<string>(
    window.localStorage.getItem(LocalStorageKeys.search) || ''
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [cards, setCards] = useState<CardProps[]>([]);
  const [cardNumber, setCardNumber] = useState<number | null>(null);
  const searchRef = useRef<string>();

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      setCards(await getCharacters(searchRef.current || ''));
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

  const openModal = (id: number) => {
    setIsModalOpen(true);
    setCardNumber(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCardNumber(null);
  };

  return (
    <main className="wrapper">
      <Search {...{ searchValue, setSearchValue, onSubmit }} />
      {isLoading ? <Loader /> : <CardsList {...{ cards, openModal }}></CardsList>}
      {isModalOpen && cardNumber && <Modal {...{ id: cardNumber, closeModal }} />}
    </main>
  );
};

export { HomePage };
