import renderToDom from '../../utils/renderToDom';

const orderFilter = () => {
  let domString = '';
  domString = '<div><h2 class="ord-title">Orders</h2></div><div><button type="button" class="btn btn-dark" id="all-orders">All</button><button type="button" class="btn btn-dark" id="open-orders">Open</button><button type="button" class="btn btn-dark" id="closed-orders">Closed</button></div>';
  renderToDom('#order-filter', domString);
};

export default orderFilter;
