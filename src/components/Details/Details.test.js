import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Details from './Details';
import data from '../../bpm.json';

const defaultProps = {
  bpmData: data,
  selectedBpm: 74
};

describe('containers <Details /> render tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('should not explode on render', () => {
    render(<Details {...defaultProps} />);
  });

  it('should render the title correctly', () => {
    const { queryByText } = render(<Details {...defaultProps} />);
    expect(queryByText('Songs that use this BPM')).toBeVisible();
  });

  it('should render the all songs and artists matching the BPM correctly', () => {
    const { queryByText } = render(<Details {...defaultProps} />);
    expect(queryByText('The Scientist', { exact: false })).toBeVisible();
    expect(queryByText('Coldplay', { exact: false })).toBeVisible();
    expect(queryByText('Sultans of Swing', { exact: false })).toBeVisible();
    expect(queryByText('Dire Straits', { exact: false })).toBeVisible();
    expect(queryByText('High Hopes', { exact: false })).not.toBeInTheDocument();
  });
});
