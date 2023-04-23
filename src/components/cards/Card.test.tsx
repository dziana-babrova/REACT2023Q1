import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { Card } from 'components/cards/Card';

describe('Card', () => {
  afterEach(() => {
    cleanup();
  });

  it('contains appropriate elements', () => {
    const cards = [
      {
        id: 17,
        name: 'Annie',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Female',
        location: {
          name: 'test location',
        },
        image: 'test image url',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1',
        },
      },
    ];

    const item = cards[0];
    render(<Card {...item}></Card>);
    expect(screen.getByAltText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.name)).toBeInTheDocument();
  });
});
