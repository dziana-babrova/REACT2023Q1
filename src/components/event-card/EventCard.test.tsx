import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'state/store/store';
import { EventCard } from 'components/event-card/EventCard';

describe('Card', () => {
  afterEach(() => {
    cleanup();
  });

  it('contains appropriate elements', () => {
    const card = {
      name: 'test name1',
      place: 'test place1',
      type: 'online',
      date: '2023-03-03',
      lang: 'English',
      image:
        'https://rolling-scopes-school.github.io/dziana-babrova-JSFE2022Q3/online-zoo/assets/GiantPanda.png',
      theme: ['character', 'season'],
    };
    render(
      <Provider store={store}>
        <EventCard {...card}></EventCard>{' '}
      </Provider>
    );
    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByAltText(card.name)).toBeInTheDocument();
    expect(screen.getByText(card.name)).toBeInTheDocument();
    expect(screen.getByText(card.place)).toBeInTheDocument();
    expect(screen.getByText(card.date)).toBeInTheDocument();
  });
});
