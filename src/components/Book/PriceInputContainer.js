import React from 'react';

import PriceInput from './PriceInput'

class PriceInputContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { price: '' };
    this.setPrice = this.setPrice.bind(this);
  }

  setPrice(event) {
    const inputedPrice = parseFloat(event.target.value);
    const commission = parseFloat(event.target.dataset.commission);
    const price = (inputedPrice / (1 - commission)).toFixed();
    this.setState({ price });
  }

  render() {
    const { minimalPrice } = this.props;
    const price = this.state.price;
    return (
      <div style={styles.container}>
        {(price < minimalPrice && price !== '') && <div style={styles.message}>Взнос не может быть меньше минимальной цены</div>}
        <PriceInput price={price} minimalPrice={minimalPrice} label='Взнос' commission={0} setPrice={this.setPrice} focus />
        <PriceInput price={price} minimalPrice={minimalPrice} label='Доход автора' commission={0.1} setPrice={this.setPrice} />
      </div>
    )
  }
}

export default PriceInputContainer;

const styles = {
  inputField: {
    width: '50px'
  },
  container: {
    marginTop: '20px'
  },
  message: {
    color: 'red'
  }

}
