import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello Ehab From Jenkins link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Ehab From Jenkins/i);
  expect(linkElement).toBeInTheDocument();
});
