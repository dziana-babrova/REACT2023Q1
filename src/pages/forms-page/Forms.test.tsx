import { describe, it } from 'vitest';
import { Provider } from 'react-redux';
import { store } from 'state/store/store';
import { cleanup, render, screen } from '@testing-library/react';
import { FormsPage } from 'pages/forms-page/Forms';

describe('Form page', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    render(
      <Provider store={store}>
        <FormsPage></FormsPage>
      </Provider>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByText("'Rick and Morty' Speaking Club")).toBeInTheDocument();
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument();
  });
});
