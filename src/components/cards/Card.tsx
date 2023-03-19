import React from 'react';
import { CardProps } from 'types/types';

class Card extends React.Component<CardProps> {
  render() {
    const { image, name, gender, type, status } = this.props;
    return (
      <li>
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{gender}</p>
        <p>{type}</p>
        <p>{status}</p>
      </li>
    );
  }
}

export { Card };
