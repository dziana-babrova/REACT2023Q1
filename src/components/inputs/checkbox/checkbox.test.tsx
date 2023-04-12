import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { CheckboxInput } from './CheckboxInput';
import { useForm } from 'react-hook-form';

describe('Input of type checkbox', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    const props = {
      className: 'test',
      id: 'test-id',
      label: 'test-label',
      errorMessage: '',
    };

    const Wrapper = () => {
      const { register } = useForm();

      const checkboxProps = {
        ...props,
        register: register('name'),
      };

      return (
        <div>
          <CheckboxInput {...checkboxProps}></CheckboxInput>
        </div>
      );
    };

    render(<Wrapper />);
    const checkbox = expect(screen.getByRole('checkbox'));
    checkbox.toBeInTheDocument();
    checkbox.toHaveAttribute('id', props.id);
    checkbox.toHaveClass(props.className);
  });

  it('is rendered with error', () => {
    const props = {
      className: 'test',
      id: 'test-id',
      label: 'test-label',
      errorMessage: 'error',
    };

    const Wrapper = () => {
      const { register } = useForm();

      const checkboxProps = {
        ...props,
        register: register('name'),
      };

      return (
        <div>
          <CheckboxInput {...checkboxProps}></CheckboxInput>
        </div>
      );
    };

    render(<Wrapper />);
    const checkbox = expect(screen.getByRole('checkbox'));
    checkbox.toBeInTheDocument();
    checkbox.toHaveAttribute('id', props.id);
    expect(screen.getByText(props.errorMessage)).toBeInTheDocument();
  });
});
