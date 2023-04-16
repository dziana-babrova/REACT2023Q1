import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardsList } from 'components/cards/CardsList';
import { Search } from 'components/search/Search';
import { Loader } from 'components/loader/Loader';
import { Modal } from 'components/modal/Modal';
import { AppDispatch, RootState } from 'store/Store';
import { fetchCharacter, resetStatus } from 'reducers/CharacterSlice';
import './home.scss';

const HomePage = () => {
  const status = useSelector((state: RootState) => state.characters.status);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState<number | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const openModal = (id: number) => {
    setIsModalOpen(true);
    setCardNumber(id);
    dispatch(fetchCharacter(id));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCardNumber(null);
    dispatch(resetStatus('idle'));
  };

  return (
    <main className="wrapper">
      <Search />
      {status === 'pending' ? <Loader /> : <CardsList {...{ openModal }}></CardsList>}
      {isModalOpen && cardNumber && <Modal {...{ closeModal }} />}
    </main>
  );
};

export { HomePage };
