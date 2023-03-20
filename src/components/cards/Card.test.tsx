import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { Card } from 'components/cards/Card';
import data from 'data/data.json';

describe('Card', () => {
  afterEach(() => {
    cleanup();
  });

  it('contains appropriate elements', () => {
    const item = data.results[0];
    render(<Card {...item}></Card>);
    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByAltText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.gender)).toBeInTheDocument();
    expect(screen.getByText(item.location.name)).toBeInTheDocument();
  });
});
