import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AboutAuthor from './AboutAuthor';

test('renders information about the author', () => {
  const author = {
    Name: 'Стив Макконнелл',
    Info: 'Признанный авторитет и известнейший автор в сообществе разработчиков. Он занимает должность главного разработчика ПО в компании Construx Software.',
    Email: 'steve@mcconnel.com',
    AvatarUrl: 'https://i.livelib.ru/auface/178436/o/b303/Stiv_Makkonnell.jpg',
  }

  const { getByAltText, getByText } = render(<AboutAuthor author={author} />)

  expect(getByText('Стив Макконнелл')).toBeInTheDocument();
  expect(getByText('Признанный авторитет и известнейший автор в сообществе разработчиков. Он занимает должность главного разработчика ПО в компании Construx Software.')).toBeInTheDocument();
  expect(getByText('steve@mcconnel.com')).toBeInTheDocument();
  expect(getByAltText('Стив Макконнелл').src).toBe(author.AvatarUrl);
})

test('renders empty author\'s place', () => {
  const { getByText } = render(<AboutAuthor />);
  expect(getByText('Информация об авторе отсутствует.')).toBeInTheDocument();
})

test('renders photo is not included message', () => {
  const author = {
    Name: 'Стив Макконнелл',
    Info: 'Признанный авторитет и известнейший автор в сообществе разработчиков. Он занимает должность главного разработчика ПО в компании Construx Software.',
    Email: 'steve@mcconnel.com',
  }
  const { getByAltText } = render(<AboutAuthor author={author} />);
  expect(getByAltText('Фото отсутствует.')).toBeInTheDocument();
})

test('works when author includes only name', () => {
  const author = {
    Name: 'Стив Макконнелл',
  }
  const { getByText } = render(<AboutAuthor author={author} />);
  expect(getByText('Стив Макконнелл')).toBeInTheDocument();
})
