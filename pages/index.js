import Head from 'next/head'
import styles from '../styles/Home.module.css'
import App from '../src/App'

import { user } from '../src/common/data';
import UserContext from '../src/components/User/UserContext';

import { fetchData } from '../src/utils/airtable';

export default function Home(props) {
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

export async function getServerSideProps() {
  return {
    props: {
      book: await fetchData('recCSoQw7GacF3O5O')
    }
  }
}
