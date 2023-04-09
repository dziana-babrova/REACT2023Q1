import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { Select } from './Select';
import { useForm } from 'react-hook-form';

describe('Select', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    const props = {
      className: 'test',
      defaultText: 'test-text',
      options: ['one', 'two', 'three'],
      errorMessage: '',
    };

    const Wrapper = () => {
      const { register } = useForm();

      const selectProps = {
        ...props,
        register: register('name'),
      };

      return (
        <div>
          <Select {...selectProps}></Select>
        </div>
      );
    };

    render(<Wrapper />);
    const option = expect(screen.getAllByRole('option'));
    option.toHaveLength(props.options.length + 1);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('is rendered with error', () => {
    const props = {
      className: 'test',
      defaultText: 'test-text',
      options: ['one', 'two', 'three'],
      errorMessage: 'error',
    };

    const Wrapper = () => {
      const { register } = useForm();

      const selectProps = {
        ...props,
        register: register('name'),
      };

      return (
        <div>
          <Select {...selectProps}></Select>
        </div>
      );
    };

    render(<Wrapper />);
    const select = expect(screen.getByRole('combobox'));
    select.toBeInTheDocument();
    expect(screen.getByText(props.errorMessage)).toBeInTheDocument();
  });
});
