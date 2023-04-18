import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardsList } from 'components/cards/CardsList';
import { Search } from 'components/search/Search';
import { Loader } from 'components/loader/Loader';
import { Modal } from 'components/modal/Modal';
import { AppDispatch, RootState } from 'state/store/Store';
import { fetchCharacter, resetCard } from 'state/reducers/CharacterSlice';
import './home.scss';
import { getSearchValue } from 'state/reducers/SearchReducer';
import { fetchCharacters } from 'state/reducers/CharactersReducer';

const HomePage = () => {
  const status = useSelector((state: RootState) => state.characters.isLoading);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState<number | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const search = useSelector(getSearchValue);

  useEffect(() => {
    dispatch(fetchCharacters(search));
  }, [dispatch, search]);

  const openModal = (id: number) => {
    setIsModalOpen(true);
    setCardNumber(id);
    dispatch(fetchCharacter(id));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // setCardNumber(null);
    dispatch(resetCard());
  };

  return (
    <main className="wrapper">
      <Search />
      {status ? <Loader /> : <CardsList {...{ openModal }}></CardsList>}
      {isModalOpen && cardNumber && <Modal {...{ closeModal }} />}
    </main>
  );
};

export { HomePage };
