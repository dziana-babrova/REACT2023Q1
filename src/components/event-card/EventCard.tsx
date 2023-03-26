import React from 'react';
import { Card } from 'types/types';

class EventCard extends React.Component<Card> {
  render() {
    const { name, lang, place, date, type, image } = this.props;
    return (
      <li className="events-item event">
        <img className="event__image" src={image} alt={name} />
        <div className="event__title">
          <span className="event__name">{name} </span>
        </div>
        <div className="event__place">
          Where?
          <span className="event__address">{place} </span>
          <span className="event__type">({type}) </span>
        </div>
        <div className="event__time">
          When?
          <span className="event__date">{date} </span>
        </div>
        <div className="event__lang">
          Language:
          <span className="event__lang-item">{lang} </span>
        </div>
      </li>
    );
  }
}

export { EventCard };
