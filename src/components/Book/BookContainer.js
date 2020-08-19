import React, { useState } from 'react';
import _ from 'lodash';

import Book from './Book';

import {fetchData} from '../../utils/airtable';

class BookContainer extends React.PureComponent {
  render() {
    return (
      <Book  {...this.props}/>
    )
  }
}

export default BookContainer;
