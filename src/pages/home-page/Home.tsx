import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSearchValue } from 'reducers/SearchReducer';
import { CardsList } from 'components/cards/CardsList';
import { Search } from 'components/search/Search';
import { CardProps } from 'components/cards/Card';
import { getCharacters } from 'services/ApiService';
import { Loader } from 'components/loader/Loader';
import { Modal } from 'components/modal/Modal';
import './home.scss';

const HomePage = () => {
  const search = useSelector(getSearchValue);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [cards, setCards] = useState<CardProps[]>([]);
  const [cardNumber, setCardNumber] = useState<number | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      setCards(await getCharacters(search));
      setIsLoading(false);
    };
    getData();
  }, [search]);

  const onSubmit = async () => {
    setIsLoading(true);
    setCards(await getCharacters(search));
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
      <Search {...{ onSubmit }} />
      {isLoading ? <Loader /> : <CardsList {...{ cards, openModal }}></CardsList>}
      {isModalOpen && cardNumber && <Modal {...{ id: cardNumber, closeModal }} />}
    </main>
  );
};

export { HomePage };
