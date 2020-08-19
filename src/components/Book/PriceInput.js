import React, { useRef, useEffect } from 'react';

const PriceInput = (props) => {
  const { minimalPrice, label, commission, price, setPrice, focus } = props;
  const maxPriceOnSlider = minimalPrice * 20 * (1 - commission);
  const minPriceOnSlider = minimalPrice * (1 - commission);
  const priceAfterCommission = (price * (1 - commission)).toFixed();
  const priceRef = useRef();

  useEffect(() => {
    if (focus) { priceRef.current.focus() };
  }, []);

  return (
    <p>
      <label> {label} </label>
      <input style={styles.inputField} value={priceAfterCommission} onChange={setPrice} data-commission={commission} ref={priceRef} />
      <input type="range" step="1" max={maxPriceOnSlider} value={priceAfterCommission} min={minPriceOnSlider} data-commission={commission} onChange={setPrice} />
    </p>
  )
}

export default PriceInput;

const styles = {
  inputField: {
    width: '50px'
  }
}
