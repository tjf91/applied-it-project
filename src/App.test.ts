import { render, screen } from '@testing-library/react';

import App from './App';

test('renders learn react link', () => {

  // @ts-expect-error ts-migrate(2749) FIXME: 'App' refers to a value, but is being used as a ty... Remove this comment to see the full error message
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
