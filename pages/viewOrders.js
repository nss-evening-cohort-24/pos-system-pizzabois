import orderFilter from '../components/buttons/orderFilter';
import clearDom from '../utils/clearDom';
import noOrders from '../utils/noOrders';
import renderToDom from '../utils/renderToDom';

const showOrders = (array) => {
  clearDom();

  let domString = '';

  if (!array.length) {
    noOrders();
  } else {
    orderFilter();
    array.forEach((order) => {
      domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${order.name}</h5>
          <h6 class="card-subtitle mb-2 text-body">${order.isClosed ? 'Closed' : 'Open'}</h6>
          <h6 class="card-subtitle mb-2 text-body">${order.phoneNumber}</h6>
          <h6 class="card-subtitle mb-2 text-body">${order.type}</h6>`;
      if (!order.isClosed) {
        domString += `
        <a href="#" class="btn btn-dark" id="order-card-details-btn--${order.firebaseKey}">Details</a>
        <a href="#" class="btn btn-dark" id="order-card-edit-btn--${order.firebaseKey}">Edit</a>
        <a href="#" class="btn btn-dark" id="order-card-delete-btn--${order.firebaseKey}">Delete</a>`;
      } else {
        domString += `
            <a href="#" class="btn btn-dark" id="order-card-details-btn--${order.firebaseKey}">Details</a>
          </div>
        </div>`;
      }
    });

    renderToDom('#order-container', domString);
  }
};

export default showOrders;
