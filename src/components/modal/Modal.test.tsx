import { Mock, describe, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from 'state/store/store';
import { Modal } from 'components/modal/Modal';
import { fetchCharacter } from 'state/reducers/characterReducer';

describe('Modal', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('contains appropriate elements for alive character', async () => {
    const character = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: 'test type',
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
    };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(character),
      })
    ) as Mock;
    const props = {
      closeModal: vi.fn(),
    };

    const store = setupStore({});
    store.dispatch(fetchCharacter(0));

    render(
      <Provider store={store}>
        <Modal {...props}></Modal>
      </Provider>
    );
    expect(await screen.findByAltText(character.name)).toBeInTheDocument();
    expect(screen.getByText(character.name)).toBeInTheDocument();
    expect(screen.getByText(character.status)).toBeInTheDocument();
    expect(screen.getByText(character.species)).toBeInTheDocument();
    expect(screen.getByText(character.type)).toBeInTheDocument();
    expect(screen.getByText(character.gender)).toBeInTheDocument();
    expect(screen.getByText(character.location.name)).toBeInTheDocument();
  });

  it('is rendered without content if fetch error occurs', async () => {
    global.fetch = vi.fn(() => Promise.reject('error')) as Mock;
    const props = {
      closeModal: vi.fn(),
    };

    const store = setupStore({});

    render(
      <Provider store={store}>
        <Modal {...props}></Modal>{' '}
      </Provider>
    );
    expect(await screen.findByText('An error occurred. Try again later')).toBeInTheDocument();
  });
});
