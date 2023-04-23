import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardsList } from 'components/cards/CardsList';
import { Search } from 'components/search/Search';
import { Loader } from 'components/loader/Loader';
import { Modal } from 'components/modal/Modal';
import './home.scss';
import { getSearchValue } from 'state/reducers/SearchReducer';
import { useGetCharactersQuery } from 'state/reducers/apiSlice';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState<number | null>(null);
  const search = useSelector(getSearchValue);
  const { data: cards, isFetching } = useGetCharactersQuery(search);

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
      <Search />
      {isFetching ? <Loader /> : <CardsList {...{ openModal, cards }}></CardsList>}
      {isModalOpen && cardNumber && <Modal {...{ closeModal, cardNumber }} />}
    </main>
  );
};

export { HomePage };
