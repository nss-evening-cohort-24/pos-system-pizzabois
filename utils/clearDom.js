const clearDom = () => {
  document.querySelector('#landing-page').innerHTML = '';
  document.querySelector('#order-filter').innerHTML = '';
  document.querySelector('#order-container').innerHTML = '';
  document.querySelector('#order-form-container').innerHTML = '';
  document.querySelector('#item-container').innerHTML = '';
  document.querySelector('#menu-container').innerHTML = '';
  document.querySelector('#item-form-container').innerHTML = '';
  document.querySelector('#close-order-container').innerHTML = '';
  document.querySelector('#revenue-container').innerHTML = '';
};

export default clearDom;
