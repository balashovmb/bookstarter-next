import React from 'react';
import UserInfo from '../User/UserInfo';

const Header = () => {
  return (
    <header style={styles.header}>
      <span style={styles.textHeader}>
        Bookstarter
        </span>
      <UserInfo />
    </header>
  )
}

export default Header;

const styles = {
  header: {
    backgroundColor: '#22222222',
    minHeight: '60px',

  },
  textHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  }
}