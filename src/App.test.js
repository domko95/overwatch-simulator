import { render, screen } from '@testing-library/react';
import App from './App';

test('display button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});
