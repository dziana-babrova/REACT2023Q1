import { FormsPageState } from 'types/types';
import { EventCard } from './EventCard';

const EventCards = (props: Pick<FormsPageState, 'cards'>) => {
  return (
    <ul className="events">
      {props.cards.map((card) => (
        <EventCard key={card.name} {...card} />
      ))}
    </ul>
  );
};

export { EventCards };
