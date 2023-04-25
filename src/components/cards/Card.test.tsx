import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Card } from 'components/cards/Card';

describe('Card', () => {
  afterEach(() => {
    cleanup();
  });

  it('contains appropriate elements', () => {
    const item = {
      id: 17,
      name: 'Annie',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Anatomy Park',
        url: 'https://rickandmortyapi.com/api/location/5',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/3'],
      url: 'https://rickandmortyapi.com/api/character/17',
      created: '2017-11-04T22:21:24.481Z',
    };
    render(<Card {...item}></Card>);
    expect(screen.getByAltText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.name)).toBeInTheDocument();
  });
});
