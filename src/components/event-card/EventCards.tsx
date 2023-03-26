import React from 'react';
import { FormsPageState } from 'types/types';
import { EventCard } from './EventCard';

class EventCards extends React.Component<FormsPageState> {
  constructor(props: FormsPageState) {
    super(props);
  }

  render() {
    return (
      <div className="events">
        {this.props.cards.map((card) => (
          <EventCard key={card.name} {...card} />
        ))}
      </div>
    );
  }
}

export { EventCards };
