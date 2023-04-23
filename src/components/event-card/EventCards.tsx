import { useSelector } from 'react-redux';
import { getEvents } from 'state/reducers/eventsReducer';
import { EventCard } from './EventCard';

const EventCards = () => {
  const events = useSelector(getEvents);
  return (
    <ul className="events">
      {events.map((event) => (
        <EventCard key={event.name} {...event} />
      ))}
    </ul>
  );
};

export { EventCards };
