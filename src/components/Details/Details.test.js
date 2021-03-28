import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Details from './Details';
import data from '../../bpm.json';
import { removeByIndex, removeDuplicatedSongs } from './Details';

const defaultProps = {
  bpmData: data,
  selectedBpm: 74,
  additionalData: [
    'Bohemian Rhapsody (Queen)',
    'Rap God (Eminem)',
    'The Scientist (Coldplay)',
    'Sultans of Swing (Dire Straits)',
    'High Hopes (Panic! at the Disco)',
    "Can't Stop (Red Hot Chili Peppers)",
    'Africa (Toto)',
    'Hurt (Johnny Cash)'
  ],
  showMore: false,
  setShowMore: jest.fn()
};

describe('containers <Details /> removeByIndex function test', () => {
  it('should remove the correct index from the array', () => {
    const givenArray = ['1', '2', '3'];
    expect(removeByIndex(givenArray, 1)).toEqual(['1', '3']);
  });
});

describe('containers <Details /> removeDuplicatedSongs function test', () => {
  it('should return an array containing single instances of songs', () => {
    const firstArray = [
      'Bohemian Rhapsody (Queen)',
      'Rap God (Eminem)',
      'The Scientist (Coldplay)',
      'Sultans of Swing (Dire Straits)',
      'High Hopes (Panic! at the Disco)'
    ];

    const secondArray = [
      'Bohemian Rhapsody (Queen)',
      'Rap God (Eminem)',
      'The Scientist (Coldplay)',
      'Sultans of Swing (Dire Straits)',
      'High Hopes (Panic! at the Disco)',
      "Can't Stop (Red Hot Chili Peppers)",
      'Africa (Toto)',
      'Hurt (Johnny Cash)'
    ];
    expect(removeDuplicatedSongs(firstArray, secondArray)).toEqual(["Can't Stop (Red Hot Chili Peppers)", 'Africa (Toto)', 'Hurt (Johnny Cash)']);
  });
});

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
