import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { HomePage } from 'pages/Home';

describe('Home page', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    render(<HomePage></HomePage>);
    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
