import { Card, CardProps } from './Card';
import './cards.scss';

const CardsList = (props: { cards: CardProps[] }) => {
  return (
    <ul className="cards-list">
      {props.cards.map((card) => (
        <Card key={card.id + card.name} {...card}></Card>
      ))}
    </ul>
  );
};

export { CardsList };
