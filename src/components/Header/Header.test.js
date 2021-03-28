import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';

describe('containers <Header /> render test', () => {
  afterEach(() => {
    cleanup();
  });

  it('should not explode on render', () => {
    render(<Header />);
  });

  it('should render the header correctly', () => {
    const { queryByText } = render(<Header />);

    expect(queryByText('Digital Metronome')).toBeInTheDocument();
    expect(queryByText('Digital Metronome')).toBeVisible();
  });
});
