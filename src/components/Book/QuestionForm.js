import React from 'react';

const QuestionForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: e.target.name.value,
      email: e.target.email.value,
      question: e.target.question.value,
    });
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <legend>Задать вопрос автору</legend>
      <p><label htmlFor='name'>Имя </label><input type="text" id="name"/></p>
      <p><label htmlFor='email'>E-mail </label><input type="email" id="email"/></p>
      <p><label htmlFor='question'>Вопрос</label></p>
      <p><textarea id="question" style={styles.textArea}/></p>
      <p><button type="submit">Отправить</button></p>
    </form>
  )
}

export default QuestionForm;

const styles = {
  form: {
    paddingTop: '20px'
  },
  textArea: {
    width: '500px',
    height: '100px'
  }
}