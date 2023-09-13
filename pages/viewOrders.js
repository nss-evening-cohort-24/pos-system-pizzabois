import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const showOrders = (array) => {
  clearDom();

  let domString = '';
  if (array.length < 1) {
    domString = 'There are no orders';
  } else {
    array.forEach((order) => {
      domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${order.name}</h5>
          <h6 class="card-subtitle mb-2 text-body">${order.isClosed ? 'closed' : 'open'}</h6>
          <h6 class="card-subtitle mb-2 text-body">${order.phoneNumber}</h6>
          <h6 class="card-subtitle mb-2 text-body">${order.type}</h6>
          <a href="#" class="card-link" id="order-card-details-btn--${order.firebaseKey}">Details</a>
          <a href="#" class="card-link" id="order-card-edit-btn--${order.firebaseKey}">Edit</a>
          <a href="#" class="card-link" id="order-card-delete-btn--${order.firebaseKey}">Delete</a>
        </div>
      </div>
      `;
    });
  }
  renderToDom('#order-container', domString);
};

export default showOrders;
