import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { DateInput } from './DateInput';
import { createRef } from 'react';

describe('Input of type date', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered with error', () => {
    const dateProps = {
      className: 'test',
      reference: createRef<HTMLInputElement>(),
      errorMessage: 'error',
    };

    render(<DateInput {...dateProps}></DateInput>);
    expect(screen.getByText(dateProps.errorMessage)).toBeInTheDocument();
  });
});
