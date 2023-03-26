import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { FileInput } from './FileInput';
import { createRef } from 'react';

describe('Input of type file', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered with error', () => {
    const fileProps = {
      className: 'test',
      reference: createRef<HTMLInputElement>(),
      errorMessage: 'error',
    };

    render(<FileInput {...fileProps}></FileInput>);
    expect(screen.getByText(fileProps.errorMessage)).toBeInTheDocument();
  });
});
