import { render } from '@testing-library/react';
import Box from './Box';

test('renders without crashing', () => {
  render(<Box />);
});

test('it matches snapshot', () => {
    const {asFragment} = render(<Box />);
    expect(asFragment()).toMatchSnapshot()
})

// specialized tests, queries tests

test('playing with queries', () => {
    const { getByText } = render(<Box />);
    console.log(getByText('Sytling for props goes here'))
})