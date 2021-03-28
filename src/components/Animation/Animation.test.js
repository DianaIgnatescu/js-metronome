import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Animation from './Animation';

describe('containers <Animation /> render tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('should not explode on render', () => {
    render(<Animation displayedValue={74} />);
  });

  it('should render the selected BPM value correctly', () => {
    const { queryByText } = render(<Animation displayedValue={128} />);
    expect(queryByText('128')).toBeVisible();
  });
});
