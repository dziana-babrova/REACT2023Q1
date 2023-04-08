import { Card, CardProps } from './Card';
import './cards.scss';

const CardsList = (props: { cards: CardProps[]; openModal: (id: number) => void }) => {
  return (
    <ul className="cards-list">
      {props.cards.map((card) => (
        <li
          onClick={props.openModal.bind(this, card.id)}
          value={card.id}
          className="card-container"
          key={'characterCard-' + card.id}
        >
          <Card {...card}></Card>
        </li>
      ))}
    </ul>
  );
};

export { CardsList };
