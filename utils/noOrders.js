import renderToDom from './renderToDom';

let domString = '';

const noOrders = () => {
  domString = '<h2>No orders found</h2>';
  renderToDom('#order-container', domString);
};

export default noOrders;
