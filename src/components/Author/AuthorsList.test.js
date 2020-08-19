import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AuthorsList from './AuthorsList';

test('renders authors info is empty message', () => {
  const { getByText } = render(<AuthorsList />)
  expect(getByText('Информация об авторах отсутствует.')).toBeInTheDocument();
})
