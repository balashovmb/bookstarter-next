import React from 'react';
import Avatar from './Avatar';

const AboutAuthor = (props) => {
  if (!props.author) {
    return <div>Информация об авторе отсутствует.</div>
  }

  const {
    author: { Name, Email, Info, AvatarUrl }
  } = props

  return (
    <div style={styles.container}>
      <Avatar avatar={AvatarUrl} name={Name} />
      <div style={styles.textContainer}>
        <div>{Name}</div>
        <div>{Email}</div>
        <div>{Info}</div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex'
  },
  textContainer: {
    flex: '1'
  }
}

export default AboutAuthor;
