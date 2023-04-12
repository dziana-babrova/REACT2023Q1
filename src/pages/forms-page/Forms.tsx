import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEvent } from 'reducers/NewEventFormReducer';
import { Confirmation } from 'components/confirmation/Confirmation';
import { EventCards } from 'components/event-card/EventCards';
import { Form, Card } from 'components/form/Form';
import './forms.scss';

const FormsPage = () => {
  const dispatch = useDispatch();
  const [popupState, setPopupState] = useState(false);

  const updateCards = (newCard: Card) => {
    dispatch(createEvent(newCard));
    setPopupState(true);
    setTimeout(() => {
      setPopupState(false);
    }, 3000);
  };

  return (
    <main className="wrapper forms-content">
      <h2 className="section-title">&apos;Rick and Morty&apos; Speaking Club</h2>
      <Form create={updateCards} />
      <h2 className="section-title">Upcoming Events</h2>
      <EventCards />
      <Confirmation confirmation={popupState} />
    </main>
  );
};

export { FormsPage };
