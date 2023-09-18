import renderToDom from './renderToDom';

const noOrders = () => {
  const domString = '<h2>No orders found</h2>';
  renderToDom('#order-container', domString);
};

export default noOrders;
