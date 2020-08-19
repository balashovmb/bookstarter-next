import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Book from '../Book/Book';

import { book, bookWithoutAuthors } from '../common/data';

test('renders information about the book', () => {
  const { getByAltText, getByText } = render(<Book book={book} />)
  expect(getByText('В предлагаемой книге описываются простые и изящные решения типичных задач, возникающих в объектно-ориентированном проектировании.')).toBeInTheDocument();
  expect(getByText('Авторы: Эрих Гамма, Ричард Хелм, Ральф Джонсон, Джон Влисидис')).toBeInTheDocument();
  expect(getByText('Количество страниц: 366')).toBeInTheDocument();
  expect(getByText('Язык: Английский')).toBeInTheDocument();
  expect(getByText('Процент прогресса: 100')).toBeInTheDocument();
  expect(getByText('Минимальная цена: 500')).toBeInTheDocument();
  expect(getByText('Желаемая цена: 1000')).toBeInTheDocument();
  expect(getByText('Собранная сумма: 400000')).toBeInTheDocument();
  expect(getByText('Ожидаемая сумма: 1500000')).toBeInTheDocument();
  expect(getByText('Подписчики: 400')).toBeInTheDocument();
  expect(getByAltText('Приёмы объектно-ориентированного проектирования. Паттерны проектирования').src).toBe(book.Cover);
})

test('renders empty book info', () => {
  const { getByText } = render(<Book />);
  expect(getByText('Информация о книге отсутствует.')).toBeInTheDocument();
})

test('renders author not specified message', () => {
  const { getByText } = render(<Book book={bookWithoutAuthors} />)
  expect(getByText('Автор не указан.')).toBeInTheDocument();
})
