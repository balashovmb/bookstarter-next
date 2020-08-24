import React from 'react';

import BookContainer from '../src/components/Book/BookContainer';
import Header from '../src/components/common/Header'
import Footer from '../src/components/common/Footer';
import ToTheTopButton from '../src/components/common/ToTheTopButton'

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <h3>Подписаться на книгу</h3>
        <BookContainer {...this.props} />
        <Footer />
        <ToTheTopButton />
        <div id="modal-root"></div>
      </>
    )
  }
}

export default App;
