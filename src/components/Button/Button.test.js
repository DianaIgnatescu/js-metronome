import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

const defaultProps = {
  value: 74,
  selected: 64,
  handleClick: jest.fn()
};

describe('containers <Button /> render tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('should not explode on render', () => {
    render(<Button {...defaultProps} />);
  });

  it('should call handleClick on button click', () => {
    const handleClickMockFn = jest.fn();
    const { queryByText } = render(<Button {...defaultProps} handleClick={handleClickMockFn} />);
    const button = queryByText('74 BPM');
    userEvent.click(button);
    expect(handleClickMockFn).toHaveBeenCalled();
    expect(handleClickMockFn).toHaveBeenCalledWith(74);
  });
});
