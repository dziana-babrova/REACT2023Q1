import { EventCard } from './EventCard';
import { Card } from 'components/form/Form';

type EventCardsProps = {
  cards: Card[];
};

const EventCards = ({ cards }: EventCardsProps) => {
  return (
    <ul className="events">
      {cards.map((card) => (
        <EventCard key={card.name} {...card} />
      ))}
    </ul>
  );
};

export { EventCards };
