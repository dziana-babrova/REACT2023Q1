import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { NotFoundPage } from 'pages/not-found-page/NotFound';

describe('About page', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    render(<NotFoundPage></NotFoundPage>);
    expect(screen.getByText("The page doesn't exist")).toBeInTheDocument();
  });
});
