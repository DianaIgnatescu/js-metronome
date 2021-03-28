import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';
import data from '../../bpm.json';

const defaultProps = {
  bpmData: data,
  setSelectedBpm: jest.fn(),
  selectedBpm: 74,
  setShowMore: jest.fn()
};

describe('containers <ButtonGroup /> render tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('should not explode on render', () => {
    render(<ButtonGroup {...defaultProps} />);
  });

  it('should render all unique BPM values', () => {
    const { queryAllByText } = render(<ButtonGroup {...defaultProps} />);
    expect(queryAllByText('72 BPM')).toHaveLength(1);
    expect(queryAllByText('74 BPM')).toHaveLength(1);
    expect(queryAllByText('82 BPM')).toHaveLength(1);
    expect(queryAllByText('84 BPM')).toHaveLength(1);
    expect(queryAllByText('128 BPM')).toHaveLength(1);
    expect(queryAllByText('138 BPM')).toHaveLength(1);
    expect(queryAllByText('87 BPM')).toHaveLength(1);
    expect(queryAllByText('92 BPM')).toHaveLength(1);
    expect(queryAllByText('96 BPM')).toHaveLength(1);
  });
});
