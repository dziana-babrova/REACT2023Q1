import { Card, CardProps } from './Card';
import './cards.scss';

const CardsList = (props: {
  cards: CardProps[];
  openPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ul className="cards-list">
      {props.cards.map((card) => (
        <div
          className="card-container"
          onClick={props.openPopup.bind(this, true)}
          key={card.id + card.name}
        >
          <Card {...card}></Card>
        </div>
      ))}
    </ul>
  );
};

export { CardsList };
