import renderToDom from './renderToDom';

const noOrders = () => {
  const domString = 'no orders';
  renderToDom('#main-container', domString);
};

export default noOrders;
