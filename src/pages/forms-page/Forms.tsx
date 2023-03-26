import { EventCards } from 'components/event-card/EventCards';
import { Form } from 'components/form/Form';
import React from 'react';
import { Card, FormsPageState } from 'types/types';
import './forms.scss';

class FormsPage extends React.Component<Record<string, never>, FormsPageState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      cards: [],
    };
    this.updateCards = this.updateCards.bind(this);
  }

  render() {
    return (
      <main className="wrapper">
        <h2 className="section-title">&apos;Rick and Morty&apos; Speaking Club</h2>
        <Form create={this.updateCards} />
        <h2 className="section-title">Upcoming Events</h2>
        <EventCards cards={this.state.cards} />
      </main>
    );
  }

  updateCards(newCard: Card) {
    this.setState({ cards: [...this.state.cards, newCard] });
  }
}

export { FormsPage };
