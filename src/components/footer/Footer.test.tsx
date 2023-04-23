import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Footer } from 'components/footer/Footer';

describe('Search box', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    render(<Footer />);
    expect(screen.getByText('RS School')).toBeInTheDocument();
    expect(screen.getByText('2023 ©')).toBeInTheDocument();
    expect(screen.getByText('Dziana Babrova')).toBeInTheDocument();
  });
});
