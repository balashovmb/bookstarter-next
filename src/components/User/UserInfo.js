import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserInfo = () => {
  const user = useContext(UserContext);
  return (
    <div style={styles.user}>
      {
        (user.firstName || user.lastName)
          ? (
              <div style={styles.container}>
                {user.avatarUrl && (
                  <div style={styles.imageBox}>
                    <img style={styles.image} src={user.avatarUrl} alt={`user.firstName user.lastName`} data-testid='user-avatar'></img>
                  </div>
                )
                }
                <div style={styles.textContainer}>
                  <div>{user.firstName}</div>
                  <div>{user.lastName}</div>
                </div>
              </div>
            )
          : <div>anonymous</div>
      }
    </div>
  )
}

export default UserInfo;

const styles = {
  user: {
    alignItems: 'right',
    float: 'right',
    fontSize: '0.8rem',
    fontWeight: 'normal'
  },
  imageBox: {
    maxWidth: '30px'
  },
  image: {
    width: '100%'
  },
  container: {
    display: 'flex'
  },
  textContainer: {
    flex: '1'
  }
}
