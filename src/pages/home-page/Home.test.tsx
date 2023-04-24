import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'state/store/Store';
import data from 'mocks/mockData.json';
import { HomePage } from 'pages/home-page/Home';

describe('Home page', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', async () => {
    render(
      <Provider store={store}>
        <HomePage></HomePage>
      </Provider>
    );
    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(await screen.findByRole('list')).toBeInTheDocument();
    expect(await screen.findAllByRole('listitem')).toHaveLength(data.results.length);
  });
});
