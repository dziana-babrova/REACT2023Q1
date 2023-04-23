import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from 'state/store/store';
import { EventCards } from 'components/event-card/EventCards';
import { createEvent } from 'state/reducers/eventsReducer';

describe('Event list', () => {
  afterEach(() => {
    cleanup();
  });

  it('contains the correct number of elements', () => {
    const items = {
      cards: [
        {
          name: 'test name1',
          place: 'test place1',
          type: 'online',
          date: '2023-03-03',
          lang: 'English',
          image:
            'https://rolling-scopes-school.github.io/dziana-babrova-JSFE2022Q3/online-zoo/assets/GiantPanda.png',
          theme: ['character', 'season'],
        },
        {
          name: 'test name2',
          place: 'test place2',
          type: 'offline',
          date: '2023-03-04',
          lang: 'English',
          image:
            'https://rolling-scopes-school.github.io/dziana-babrova-JSFE2022Q3/online-zoo/assets/GiantPanda.png',
          theme: ['character', 'season'],
        },
        {
          name: 'test name3',
          place: 'test place3',
          type: 'online',
          date: '2023-03-07',
          lang: 'English',
          image:
            'https://rolling-scopes-school.github.io/dziana-babrova-JSFE2022Q3/online-zoo/assets/GiantPanda.png',
          theme: ['character', 'season'],
        },
      ],
    };

    const store = setupStore({});
    store.dispatch(createEvent(items.cards[0]));
    store.dispatch(createEvent(items.cards[1]));
    store.dispatch(createEvent(items.cards[2]));

    render(
      <Provider store={store}>
        <EventCards></EventCards>
      </Provider>
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toEqual(items.cards.length);
  });
});
