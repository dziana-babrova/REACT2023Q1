import { render, screen, cleanup } from '@testing-library/react';
import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'state/store/store';
import App from './App';

describe('App', () => {
  afterEach(() => {
    cleanup();
  });

  it('displays Home page name in the header', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home');
  });

  it('displays About page name in the header', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About us');
  });

  it('displays Forms page name in the header', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/forms']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Forms');
  });

  it('displays 404 page name in the header if rendered path is invalid', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/non-existing-route']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('404');
  });
});
