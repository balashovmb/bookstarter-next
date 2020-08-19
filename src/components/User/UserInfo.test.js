import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserContext from './UserContext';
import UserInfo from './UserInfo';

test('renders user info when data is ok', () => {
  const user = {
    firstName: 'Stepan',
    lastName: 'Ivanov',
    avatarUrl: 'https://imageproxy.ifunny.co/noop/user_photos/be199eb6d91c6160b18c91d3189f33a8a581a96b_0.jpg'
  }

  const tree = (
    <UserContext.Provider value={user}>
      <UserInfo />
    </UserContext.Provider>
  );
  const { getByText, getByTestId } = render(tree);
  expect(getByText('Stepan')).toBeInTheDocument();
  expect(getByText('Ivanov')).toBeInTheDocument();
  const element = getByTestId('user-avatar');
  expect(element.getAttribute('src')).toBe(user.avatarUrl);
})


test('renders user info when last name is missed', () => {
  const user = {
    firstName: 'Stepan',
    avatarUrl: 'https://imageproxy.ifunny.co/noop/user_photos/be199eb6d91c6160b18c91d3189f33a8a581a96b_0.jpg'
  }

  const tree = (
    <UserContext.Provider value={user}>
      <UserInfo />
    </UserContext.Provider>
  );
  const { getByText, getByTestId } = render(tree);
  expect(getByText('Stepan')).toBeInTheDocument();
  const element = getByTestId('user-avatar');
  expect(element.getAttribute('src')).toBe(user.avatarUrl);
})

test('renders user info when avatar is missed', () => {
  const user = {
    firstName: 'Stepan',
    lastName: 'Ivanov',
  }

  const tree = (
    <UserContext.Provider value={user}>
      <UserInfo />
    </UserContext.Provider>
  );
  const { getByText } = render(tree);
  expect(getByText('Stepan')).toBeInTheDocument();
  expect(getByText('Ivanov')).toBeInTheDocument();
})

test('renders "anonymous" and not\'t renders avatar when first name and last name is missed', () => {
  const user = {
    avatarUrl: 'https://imageproxy.ifunny.co/noop/user_photos/be199eb6d91c6160b18c91d3189f33a8a581a96b_0.jpg'
  }

  const tree = (
    <UserContext.Provider value={user}>
      <UserInfo />
    </UserContext.Provider>
  );
  const { getByText, queryByTestId } = render(tree);
  expect(getByText('anonymous')).toBeInTheDocument();
  const element = queryByTestId('user-avatar');
  expect(element).toBeNull;
})