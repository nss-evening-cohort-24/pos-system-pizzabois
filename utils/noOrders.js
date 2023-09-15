import renderToDom from './renderToDom';

const noOrders = () => {
  const domString = 'no orders';
  renderToDom('#order-container', domString);
};

export default noOrders;
