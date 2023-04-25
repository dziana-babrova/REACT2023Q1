import { Card, CardProps } from './Card';
import './cards.scss';

type CardsListProps = {
  openModal: (id: number) => void;
  cards: CardProps[] | undefined;
};

const CardsList = ({ openModal, cards }: CardsListProps) => {
  return (
    <ul className="cards-list">
      {cards && cards.length > 0 ? (
        cards.map((card) => (
          <li
            onClick={openModal.bind(this, card.id)}
            value={card.id}
            className="card-container"
            key={'characterCard-' + card.id}
          >
            <Card {...card}></Card>
          </li>
        ))
      ) : (
        <div className="no-results-message">No characters found</div>
      )}
    </ul>
  );
};

export { CardsList };
