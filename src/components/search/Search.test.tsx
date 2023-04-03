import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { Search } from 'components/search/Search';

describe('Search box', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    render(<Search></Search>);
    expect(screen.getByRole<HTMLInputElement>('search')).toBeInTheDocument();
  });
});
