import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { RadioInput } from './RadioInput';
import { useForm } from 'react-hook-form';

describe('Input of type radio', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    const props = {
      className: 'test',
      name: 'test-name',
      label: 'test-label',
      errorMessage: '',
    };

    const Wrapper = () => {
      const { register } = useForm();

      const radioProps = {
        ...props,
        register: register('name'),
      };

      return (
        <div>
          <RadioInput {...radioProps}></RadioInput>
        </div>
      );
    };

    render(<Wrapper />);
    const radio = expect(screen.getByRole('radio'));
    radio.toBeInTheDocument();
    radio.toHaveAttribute('name', props.name);
    expect(screen.getByText(props.label)).toBeInTheDocument();
  });

  it('is rendered with error', () => {
    const props = {
      className: 'test',
      name: 'test-name',
      label: 'test-label',
      errorMessage: 'error',
    };

    const Wrapper = () => {
      const { register } = useForm();

      const radioProps = {
        ...props,
        register: register('name'),
      };

      return (
        <div>
          <RadioInput {...radioProps}></RadioInput>
        </div>
      );
    };

    render(<Wrapper />);
    const radio = expect(screen.getByRole('radio'));
    radio.toBeInTheDocument();
    radio.toHaveAttribute('name', props.name);
    expect(screen.getByText(props.errorMessage)).toBeInTheDocument();
  });
});
