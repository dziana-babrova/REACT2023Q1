import { Confirmation } from 'components/confirmation/Confirmation';
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
      confirmation: false,
    };
    this.updateCards = this.updateCards.bind(this);
  }

  render() {
    return (
      <main className="wrapper forms-content">
        <h2 className="section-title">&apos;Rick and Morty&apos; Speaking Club</h2>
        <Form create={this.updateCards} />
        <h2 className="section-title">Upcoming Events</h2>
        <EventCards cards={this.state.cards} />
        <Confirmation confirmation={this.state.confirmation} />
      </main>
    );
  }

  updateCards(newCard: Card) {
    this.setState({ cards: [...this.state.cards, newCard] });
    this.setState({ confirmation: true });
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ confirmation: false });
    }, 3000);
  }
}

export { FormsPage };
