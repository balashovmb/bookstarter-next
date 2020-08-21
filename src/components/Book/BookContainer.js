import React, { useState } from 'react';
import Book from './Book';

class BookContainer extends React.PureComponent {
  render() {
    return (
      <Book  {...this.props} />
    )
  }
}

export default BookContainer;
