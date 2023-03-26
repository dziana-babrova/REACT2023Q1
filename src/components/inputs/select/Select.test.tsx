import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { Select } from './Select';
import { createRef } from 'react';

describe('Select', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    const selectProps = {
      className: 'test',
      defaultText: 'test-text',
      options: ['one', 'two', 'three'],
      reference: createRef<HTMLSelectElement>(),
      errorMessage: '',
    };

    render(<Select {...selectProps}></Select>);
    const option = expect(screen.getAllByRole('option'));
    option.toHaveLength(selectProps.options.length + 1);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('is rendered with error', () => {
    const selectProps = {
      className: 'test',
      defaultText: 'test-text',
      options: ['one', 'two', 'three'],
      reference: createRef<HTMLSelectElement>(),
      errorMessage: 'error',
    };

    render(<Select {...selectProps}></Select>);
    const select = expect(screen.getByRole('combobox'));
    select.toBeInTheDocument();
    expect(screen.getByText(selectProps.errorMessage)).toBeInTheDocument();
  });
});
