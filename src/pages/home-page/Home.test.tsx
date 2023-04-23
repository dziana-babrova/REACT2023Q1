import { Mock, describe, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from 'state/store/store';

import { HomePage } from 'pages/home-page/Home';

describe('Home page', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('is rendered', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            info: {
              count: 826,
              pages: 42,
              next: 'https://rickandmortyapi.com/api/character/?page=2',
              prev: null,
            },
            results: [
              {
                id: 1,
                name: 'Rick Sanchez',
                status: 'Alive',
                species: 'Human',
                type: '',
                gender: 'Male',
                origin: {
                  name: 'Earth',
                  url: 'https://rickandmortyapi.com/api/location/1',
                },
                location: {
                  name: 'Earth',
                  url: 'https://rickandmortyapi.com/api/location/20',
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                episode: [
                  'https://rickandmortyapi.com/api/episode/1',
                  'https://rickandmortyapi.com/api/episode/2',
                ],
                url: 'https://rickandmortyapi.com/api/character/1',
                created: '2017-11-04T18:48:46.250Z',
              },
              {
                id: 17,
                name: 'Annie',
                status: 'Alive',
                species: 'Human',
                type: '',
                gender: 'Female',
                origin: {
                  name: 'Earth (C-137)',
                  url: 'https://rickandmortyapi.com/api/location/1',
                },
                location: {
                  name: 'Anatomy Park',
                  url: 'https://rickandmortyapi.com/api/location/5',
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
                episode: ['https://rickandmortyapi.com/api/episode/3'],
                url: 'https://rickandmortyapi.com/api/character/17',
                created: '2017-11-04T22:21:24.481Z',
              },
              {
                id: 18,
                name: 'Antenna Morty',
                status: 'Alive',
                species: 'Human',
                type: 'Human with antennae',
                gender: 'Male',
                origin: {
                  name: 'unknown',
                  url: '',
                },
                location: {
                  name: 'Citadel of Ricks',
                  url: 'https://rickandmortyapi.com/api/location/3',
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
                episode: [
                  'https://rickandmortyapi.com/api/episode/10',
                  'https://rickandmortyapi.com/api/episode/28',
                ],
                url: 'https://rickandmortyapi.com/api/character/18',
                created: '2017-11-04T22:25:29.008Z',
              },
            ],
          }),
      })
    ) as Mock;
    render(
      <Provider store={setupStore({})}>
        <HomePage></HomePage>
      </Provider>
    );
    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(await screen.findByRole('list')).toBeInTheDocument();
    expect(await screen.findAllByRole('listitem')).toHaveLength(3);
  });

  it('is rendered without content if fetch error occurs', async () => {
    global.fetch = vi.fn(() => Promise.reject('error')) as Mock;

    render(
      <Provider store={setupStore({})}>
        <HomePage></HomePage>
      </Provider>
    );
    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(await screen.findByText('No characters found')).toBeInTheDocument();
  });
});
