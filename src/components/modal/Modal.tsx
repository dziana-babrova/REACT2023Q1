import { useState, useEffect } from 'react';
import { CardProps } from 'components/cards/Card';
import './modal.scss';
import { getCharacter } from 'services/ApiService';
import { Loader } from 'components/loader/Loader';

type ModalProps = {
  id: number;
};

export const Modal = ({ id }: ModalProps) => {
  const [card, setCard] = useState<CardProps | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      setCard(await getCharacter(id));
    };
    getData();
    setIsLoading(false);
  }, [id]);

  return (
    <div className="overlay">
      <div className="popup">{isLoading ? <Loader /> : <div>{card?.name}</div>}</div>
    </div>
  );
};
