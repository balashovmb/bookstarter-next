import React from 'react';

const AuthorsString = ({ authors }) => {
  if (!authors || authors.length === 0) { return 'Автор не указан.' };

  let authorsString = authors.length > 1 ? 'Авторы: ' : 'Автор: ';
  authorsString += authors.map(author => author.Name).join(', ');

  return <div>{authorsString}</div>
}

export default AuthorsString;
