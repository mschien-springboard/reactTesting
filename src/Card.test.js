import { render } from '@testing-library/react';
import Card from './Card'

it('Should render App without crashing', () => {
  render(<Card />);
});

it('Should match most recent snapshot', () => {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});