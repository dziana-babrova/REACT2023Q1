import { describe, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { Search } from 'components/search/Search';

describe('Search box', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    const searchProps = {
      searchValue: 'test',
      setSearchValue: vi.fn(),
      onSubmit: vi.fn(),
    };

    render(<Search {...searchProps}></Search>);
    expect(screen.getByRole<HTMLInputElement>('search')).toBeInTheDocument();
  });
});
