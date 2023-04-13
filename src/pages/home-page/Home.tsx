import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchValue } from 'reducers/SearchReducer';
import { setCharacters } from 'reducers/CharactersReducer';
import { CardsList } from 'components/cards/CardsList';
import { Search } from 'components/search/Search';
import { getCharacters } from 'services/ApiService';
import { Loader } from 'components/loader/Loader';
import { Modal } from 'components/modal/Modal';
import './home.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const search = useSelector(getSearchValue);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState<number | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const characters = await getCharacters(search);
      dispatch(setCharacters(characters));
      setIsLoading(false);
    };
    getData();
  }, [dispatch, search]);

  const onSubmit = async () => {
    setIsLoading(true);
    const characters = await getCharacters(search);
    dispatch(setCharacters(characters));
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
      {isLoading ? <Loader /> : <CardsList {...{ openModal }}></CardsList>}
      {isModalOpen && cardNumber && <Modal {...{ id: cardNumber, closeModal }} />}
    </main>
  );
};

export { HomePage };
