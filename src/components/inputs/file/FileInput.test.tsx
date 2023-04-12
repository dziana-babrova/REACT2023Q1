import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { FileInput } from './FileInput';
import { useForm } from 'react-hook-form';

describe('Input of type file', () => {
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

      const fileProps = {
        ...props,
        register: register('name'),
      };

      return (
        <div>
          <FileInput {...fileProps}></FileInput>
        </div>
      );
    };

    render(<Wrapper />);
    expect(screen.getByText(props.errorMessage)).toBeInTheDocument();
  });
});
