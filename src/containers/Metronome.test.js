import React from 'react';
import { render } from '@testing-library/react';
import Metronome from './Metronome';

describe('containers <Metronome /> render test', () => {
  it('should not explode on render', () => {
    render(<Metronome />);
  });
});
