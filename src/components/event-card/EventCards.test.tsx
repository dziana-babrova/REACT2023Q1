import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { EventCards } from 'components/event-card/EventCards';

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
    render(<EventCards {...items}></EventCards>);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toEqual(items.cards.length);
  });
});
