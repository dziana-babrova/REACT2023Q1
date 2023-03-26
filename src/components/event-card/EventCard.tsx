import React from 'react';
import { Card } from 'types/types';
import './event-card.scss';

class EventCard extends React.Component<Card> {
  render() {
    const { name, lang, place, date, type, image, theme } = this.props;
    return (
      <li className="events-item event">
        <img className="event__image" src={image} alt={name} />
        <div className="event__title">
          <span className="event__name">{name} </span>
        </div>
        <div className="event__place">
          <span className="event__label">Where? </span>
          <span className="event__address">{place} </span>
          <span className="event__type">({type}) </span>
        </div>
        <div className="event__time">
          <span className="event__label">When? </span>
          <span className="event__date">{date} </span>
        </div>
        <div className="event__lang">
          <span className="event__label">What language? </span>
          <span className="event__lang-item">{lang} </span>
        </div>
        <div className="event__theme">
          <span className="event__label">What to discuss? </span>
          <span className="event__theme-item">{theme.join(', ')} </span>
        </div>
      </li>
    );
  }
}

export { EventCard };
