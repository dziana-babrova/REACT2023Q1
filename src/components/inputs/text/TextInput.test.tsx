import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { TextInput } from './TextInput';
import { createRef } from 'react';

describe('Input of type text', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    const textInputProps = {
      className: 'test',
      id: 'test-id',
      reference: createRef<HTMLInputElement>(),
      errorMessage: '',
    };

    render(<TextInput {...textInputProps}></TextInput>);
    const textbox = expect(screen.getByRole('textbox'));
    textbox.toBeInTheDocument();
    textbox.toHaveAttribute('id', textInputProps.id);
  });

  it('is rendered with error', () => {
    const textInputProps = {
      className: 'test',
      id: 'test-id',
      reference: createRef<HTMLInputElement>(),
      errorMessage: 'error',
    };

    render(<TextInput {...textInputProps}></TextInput>);
    const textbox = expect(screen.getByRole('textbox'));
    textbox.toBeInTheDocument();
    textbox.toHaveAttribute('id', textInputProps.id);
    expect(screen.getByText(textInputProps.errorMessage)).toBeInTheDocument();
  });
});
