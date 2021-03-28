import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should not explode on render', () => {
  render(<App />);
});
