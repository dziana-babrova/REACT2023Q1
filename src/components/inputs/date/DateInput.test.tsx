import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { DateInput } from './DateInput';
import { useForm } from 'react-hook-form';

describe('Input of type date', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered with error', () => {
    const props = {
      className: 'test',
      errorMessage: 'error',
    };

    const Wrapper = () => {
      const { register } = useForm();

      const dateProps = {
        ...props,
        register: register('name'),
      };

      return (
        <div>
          <DateInput {...dateProps}></DateInput>
        </div>
      );
    };

    render(<Wrapper />);
    expect(screen.getByText(props.errorMessage)).toBeInTheDocument();
  });
});
