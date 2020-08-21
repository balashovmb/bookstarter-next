import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import App from '../../src/App'

import { user } from '../../src/common/data';
import UserContext from '../../src/components/User/UserContext';

import { fetchData } from '../../src/utils/airtable';

export default function Book(props) {
  return (
    <>
      <Head>
        <title> {props.book.Title || 'Bookstarter'}</title>
      </Head>
      <UserContext.Provider value={user}>
        <App {...props} />
      </UserContext.Provider>
    </>
  )
}

export async function getServerSideProps({params}) {
  
  return {
    props: {
      book: await fetchData(params.id)
    }
  }
}
