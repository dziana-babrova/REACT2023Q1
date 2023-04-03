import { Confirmation } from 'components/confirmation/Confirmation';
import { EventCards } from 'components/event-card/EventCards';
import { Form, Card } from 'components/form/Form';
import { useState } from 'react';
import './forms.scss';

const FormsPage = () => {
  const [formState, setFormState] = useState<Card[]>([]);
  const [popupState, setPopupState] = useState(false);

  const updateCards = (newCard: Card) => {
    setFormState([...formState, newCard]);
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
      <EventCards cards={formState} />
      <Confirmation confirmation={popupState} />
    </main>
  );
};

export { FormsPage };
