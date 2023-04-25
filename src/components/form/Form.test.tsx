import { describe, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'state/store/Store';
import { Form } from 'components/form/Form';

describe('Form', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    const create = vi.fn();
    render(
      <Provider store={store}>
        <Form create={create}></Form>;
      </Provider>
    );
    expect(screen.getByText('Give your event a name:')).toBeInTheDocument();
    expect(screen.getByText('Provide the held date:')).toBeInTheDocument();
    expect(screen.getByText('What are you planning to discuss?')).toBeInTheDocument();
    expect(screen.getByText('Which language will your group speak?')).toBeInTheDocument();
    expect(screen.getByText('Type of event:')).toBeInTheDocument();
    expect(
      screen.getByText('Link or Address where your event will take place:')
    ).toBeInTheDocument();
    expect(screen.getByText('Upload a poster for your event:')).toBeInTheDocument();
  });
});
