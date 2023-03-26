import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { FormsPage } from 'pages/forms-page/Forms';

describe('Form page', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    render(<FormsPage></FormsPage>);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByText("'Rick and Morty' Speaking Club")).toBeInTheDocument();
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument();
  });
});
