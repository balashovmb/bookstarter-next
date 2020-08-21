import axios from 'axios';
import _ from 'lodash';

import { API_TOKEN } from '../common/data';

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appDH1YfToGXZokH7',
  timeout: 4000,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`
  }
})

function mapSimilarBooksFromAirtable(records, book) {
  delete book.SimilarBooksIds;
  if (!records) { return { ...book, SimilarBooks: [] } };
  const similarBooks = (records.map(record => {
    const authors = record.data.fields['Name (from Authors)'].join(', ');

    return ({
      Title: record.data.fields.Title,
      Cover: record.data.fields.Cover,
      Authors: authors,
      Id: record.data.id
    })
  }))
  return { ...book, SimilarBooks: similarBooks }
}

function mapFromAirtable(record) {

  const authors = _.zip(
    record.fields.Authors,
    record.fields["Name (from Authors)"],
    record.fields["Info (from Authors)"],
    record.fields["AvatarUrl (from Authors)"],
    record.fields["Email (from Authors)"]
  ).map(record => _.zipObject(
    ['Id', 'Name', 'Info', 'AvatarUrl', 'Email'],
    record
  ))

  return ({
    Title: record.fields.Title,
    Annotation: record.fields.Annotation,
    Pages: record.fields.Pages,
    Language: record.fields.Language,
    Progress: record.fields.Progress,
    Cover: record.fields.Cover,
    MinimalPrice: record.fields.MinimalPrice,
    ExpectedPrice: record.fields.ExpectedPrice,
    Amount: record.fields.Amount,
    ExpectedAmount: record.fields.ExpectedAmount,
    Subscribers: record.fields.Subscribers,
    Authors: authors,
    SimilarBooksIds: record.fields.SimilarBooks
  })
}

function addSimilarBooks(book) {
  return Promise.all(book.SimilarBooksIds.map(bookId =>
    httpClient.get(`/Books/${bookId}`)))
    .then(records => mapSimilarBooksFromAirtable(records, book))

}

export const fetchData = (bookId) => {
  return (
    httpClient.get(`/Books/${bookId}`)
      .then(result => result.data)
      .then(mapFromAirtable)
      .then(book => addSimilarBooks(book))
  )
}