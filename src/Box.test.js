import { render, screen } from '@testing-library/react';
import Box from './Box';

test('renders without crashing', () => {
  render(<Box />);
});