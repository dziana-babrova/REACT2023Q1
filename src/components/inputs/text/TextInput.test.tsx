import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { TextInput } from './TextInput';
import { useForm } from 'react-hook-form';

describe('Input of type text', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    const props = {
      className: 'test',
      id: 'test-id',
      errorMessage: '',
    };

    const Wrapper = () => {
      const { register } = useForm();

      const textInputProps = {
        ...props,
        register: register('name'),
      };

      return (
        <div>
          <TextInput {...textInputProps}></TextInput>
        </div>
      );
    };

    render(<Wrapper />);
    const textbox = expect(screen.getByRole('textbox'));
    textbox.toBeInTheDocument();
    textbox.toHaveAttribute('id', props.id);
  });

  it('is rendered with error', () => {
    const props = {
      className: 'test',
      id: 'test-id',
      errorMessage: 'error',
    };

    const Wrapper = () => {
      const { register } = useForm();

      const textInputProps = {
        ...props,
        register: register('name'),
      };

      return (
        <div>
          <TextInput {...textInputProps}></TextInput>
        </div>
      );
    };

    render(<Wrapper />);
    const textbox = expect(screen.getByRole('textbox'));
    textbox.toBeInTheDocument();
    textbox.toHaveAttribute('id', props.id);
    expect(screen.getByText(props.errorMessage)).toBeInTheDocument();
  });
});
