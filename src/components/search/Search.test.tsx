import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from 'state/store/store';
import { Search } from 'components/search/Search';

describe('Search box', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    render(
      <Provider store={setupStore({})}>
        <Search></Search>
      </Provider>
    );
    expect(screen.getByRole<HTMLInputElement>('search')).toBeInTheDocument();
  });
});
