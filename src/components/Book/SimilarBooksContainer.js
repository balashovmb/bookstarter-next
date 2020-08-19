import React from 'react';

import SimilarBooks from './SimilarBooks';

class SimilarBooksContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hiddenBookIds: []
    };
    this.removeFromSimilarBook = this.removeFromSimilarBook.bind(this);
  }

  _booksToShow(books) {
    if (!books) return [];
    return books.filter(book => !this.state.hiddenBookIds.includes(book.Id)).slice(0, 3);
  }

  removeFromSimilarBook(currentBookId) {
    this.setState((state) => ({
      hiddenBookIds: [...this.state.hiddenBookIds, currentBookId]
    }))
  }

  render() {
    const booksToShow = this._booksToShow(this.props.SimilarBooks);
    return (
      <SimilarBooks booksToShow={booksToShow} removeFromSimilarBook={this.removeFromSimilarBook} isLoading={booksToShow.length === 0} />
    )
  }
}

export default SimilarBooksContainer;
