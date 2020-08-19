import React from 'react';

import SimilarBook from './SimilarBook';


const SimilarBooks = ({ booksToShow, removeFromSimilarBook }) => {
  return (
    <div>
      <div>Похожие книги:</div>
      {
        booksToShow.map(book => (
          <SimilarBook book={book} key={book.Id} removeFromSimilarBook={removeFromSimilarBook} />
        ))
      }
    </div>
  )
}

export default SimilarBooks;
