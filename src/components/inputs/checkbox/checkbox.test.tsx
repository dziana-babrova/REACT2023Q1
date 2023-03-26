import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { CheckboxInput } from './CheckboxInput';
import { createRef } from 'react';

describe('Input of type checkbox', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    const checkboxProps = {
      className: 'test',
      id: 'test-id',
      label: 'test-label',
      reference: createRef<HTMLInputElement>(),
      errorMessage: '',
    };

    render(<CheckboxInput {...checkboxProps}></CheckboxInput>);
    const checkbox = expect(screen.getByRole('checkbox'));
    checkbox.toBeInTheDocument();
    checkbox.toHaveAttribute('id', checkboxProps.id);
    checkbox.toHaveClass(checkboxProps.className);
  });

  it('is rendered with error', () => {
    const checkboxProps = {
      className: 'test',
      id: 'test-id',
      label: 'test-label',
      reference: createRef<HTMLInputElement>(),
      errorMessage: 'error',
    };

    render(<CheckboxInput {...checkboxProps}></CheckboxInput>);
    const checkbox = expect(screen.getByRole('checkbox'));
    checkbox.toBeInTheDocument();
    checkbox.toHaveAttribute('id', checkboxProps.id);
    expect(screen.getByText(checkboxProps.errorMessage)).toBeInTheDocument();
  });
});
