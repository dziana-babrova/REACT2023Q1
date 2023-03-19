import React from 'react';
import data from 'data/data.json';
import { Card } from './Card';

class CardsList extends React.Component {
  render() {
    return (
      <ul>
        {data.results.map((props) => (
          <Card key={props.name} {...props}></Card>
        ))}
      </ul>
    );
  }
}
export { CardsList };
