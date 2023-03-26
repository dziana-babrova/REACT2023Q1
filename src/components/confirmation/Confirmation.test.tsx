import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { Confirmation } from 'components/confirmation/Confirmation';

describe('Confirmation', () => {
  afterEach(() => {
    cleanup();
  });

  it.fails('is not rendered if state is false', () => {
    const state = {
      confirmation: false,
    };
    render(<Confirmation {...state}></Confirmation>);
    expect(screen.getByText('Card Created')).toBeInTheDocument();
  });

  it('is rendered if state is true', () => {
    const state = {
      confirmation: true,
    };
    render(<Confirmation {...state}></Confirmation>);
    expect(screen.getByText('Card Created')).toBeInTheDocument();
  });
});
