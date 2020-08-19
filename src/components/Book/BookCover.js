import React from 'react';

const BookCover = ({ cover, title }) => (
  <div style={styles.imageBox}>
    <img style={styles.image} src={cover} alt={title}></img>
  </div>
)

const styles = {
  imageBox: {
    maxWidth: '400px'
  },
  image: {
    width: '100%'
  }
}

export default BookCover;
