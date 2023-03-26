import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { RadioInput } from './RadioInput';
import { createRef } from 'react';

describe('Input of type radio', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    const radioProps = {
      className: 'test',
      name: 'test-name',
      label: 'test-label',
      reference: createRef<HTMLInputElement>(),
      errorMessage: '',
    };

    render(<RadioInput {...radioProps}></RadioInput>);
    const radio = expect(screen.getByRole('radio'));
    radio.toBeInTheDocument();
    radio.toHaveAttribute('name', radioProps.name);
    expect(screen.getByText(radioProps.label)).toBeInTheDocument();
  });

  it('is rendered with error', () => {
    const radioProps = {
      className: 'test',
      name: 'test-name',
      label: 'test-label',
      reference: createRef<HTMLInputElement>(),
      errorMessage: 'error',
    };

    render(<RadioInput {...radioProps}></RadioInput>);
    const radio = expect(screen.getByRole('radio'));
    radio.toBeInTheDocument();
    radio.toHaveAttribute('name', radioProps.name);
    expect(screen.getByText(radioProps.errorMessage)).toBeInTheDocument();
  });
});
