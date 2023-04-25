import { describe, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'state/store/Store';
import { Modal } from 'components/modal/Modal';
import data from 'mocks/mockData.json';

describe('Modal', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('contains appropriate elements for alive character', async () => {
    const character = data.results[6];

    const props = {
      closeModal: vi.fn(),
      cardNumber: 7,
    };

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
    const props = {
      closeModal: vi.fn(),
      cardNumber: 0,
    };

    render(
      <Provider store={store}>
        <Modal {...props}></Modal>{' '}
      </Provider>
    );
    expect(await screen.findByText('An error occurred. Try again later')).toBeInTheDocument();
  });
});
