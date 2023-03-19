import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { CardsList } from 'components/cards/CardsList';
import data from 'data/data.json';

describe('Cards list', () => {
  afterEach(() => {
    cleanup();
  });

  it('contains the correct number of elements', () => {
    const items = data.results;
    render(<CardsList></CardsList>);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toEqual(items.length);
  });
});
