import { render, screen, cleanup } from '@testing-library/react';
import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  afterEach(() => {
    cleanup();
  });

  it('displays Home page name in the header', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home');
  });

  it('displays About page name in the header', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About us');
  });

  it('displays Forms page name in the header', () => {
    render(
      <MemoryRouter initialEntries={['/forms']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Forms');
  });

  it('displays 404 page name in the header if rendered path is invalid', () => {
    render(
      <MemoryRouter initialEntries={['/non-existing-route']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('404');
  });
});
