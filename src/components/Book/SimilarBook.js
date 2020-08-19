import React from 'react';

const SimilarBook = React.memo(({ book, removeFromSimilarBook }) => {
  const {
    Cover,
    Title,
    Authors
  } = book;

  return (
    <div style={styles.book}>
      <div style={styles.imageBox}>
        <img src={Cover} alt={Title} style={styles.image}></img>
      </div>
      <div style={styles.textContainer}>
        <div>{Title}</div>
        <div>{Authors}</div>
        <button onClick={() => removeFromSimilarBook(book.Id)}>Убрать</button>
      </div>
    </div>
  )
})

export default SimilarBook;

const styles = {
  book: {
    marginTop: '10px',
    display: 'flex'
  },
  imageBox: {
    maxWidth: '40px'
  },
  image: {
    width: '100%'
  },
  textContainer: {
    flex: '1'
  }
}
