import { render, screen } from '@testing-library/react';
import History_app from './history_app';

test('renders learn react link', () => {
  render(<History_app />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
