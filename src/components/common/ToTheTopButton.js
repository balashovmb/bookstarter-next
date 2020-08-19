import React from 'react';
import debounce from './debounce';

class ToTheTopButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { display: 'none' };
    this.handleScroll = debounce(this.handleScroll.bind(this), 100);
  }

  handleScroll() {
    if (window.pageYOffset > 100) {
      this.setState({ display: 'block' })
    } else {
      this.setState({ display: 'none' })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  toTheTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    const { display } = this.state;
    const style = { ...styles.button, display }

    return (
      <button style={style} onClick={(e) => this.toTheTop(e)}>Go to the top</button>
    );
  }

}

export default ToTheTopButton;

const styles = {
  button: {
    right: '100px',
    bottom: '20px',
    position: 'fixed',
    display: 'none'
  }
}
