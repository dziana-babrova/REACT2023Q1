import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { Card, selectColor } from 'components/cards/Card';
import data from 'data/data.json';

describe('Card', () => {
  afterEach(() => {
    cleanup();
  });

  it('contains appropriate elements', () => {
    const item = data.results[0];
    render(<Card {...item}></Card>);
    expect(screen.getByAltText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.gender)).toBeInTheDocument();
    expect(screen.getByText(item.location.name)).toBeInTheDocument();
  });
});

describe('selectColor function', () => {
  afterEach(() => {
    cleanup();
  });

  it('returns correct class for alive value', () => {
    const value = selectColor('alive');
    expect(value).toBe('card-status_alive');
  });

  it('returns correct class for dead value', () => {
    const value = selectColor('dead');
    expect(value).toBe('card-status_dead');
  });
  it('returns correct class for any other value', () => {
    const value = selectColor('unknown');
    expect(value).toBe('card-status_unknown');
  });
});
