import { render } from '@testing-library/react';
import App from './App';

it('Should render App without crashing', () => {
  render(<App />);
});

it('Should match most recent snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});