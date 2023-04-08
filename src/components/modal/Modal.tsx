import { useState, useEffect } from 'react';
import { CardProps } from 'components/cards/Card';
import './modal.scss';
import { getCharacter } from 'services/ApiService';

type ModalProps = {
  id: number;
};

export const Modal = ({ id }: ModalProps) => {
  const [card, setCard] = useState<CardProps | undefined>(undefined);

  useEffect(() => {
    const getData = async () => {
      setCard(await getCharacter(id));
    };
    getData();
  }, [id]);

  return (
    <div className="overlay">
      <div className="popup">{card?.name}</div>
    </div>
  );
};
