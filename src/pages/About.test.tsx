import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { AboutPage } from 'pages/About';

describe('About page', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    render(<AboutPage></AboutPage>);
    expect(screen.getByText('No data provided')).toBeInTheDocument();
  });
});
