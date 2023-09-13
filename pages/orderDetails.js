import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const emptyDetails = () => {
  const domString = '<h2>No orders have been made yet!</h2>';
  renderToDom('#order-container', domString);
};

const orderDetails = (array) => {
  clearDom();

  let domString = '';

  if (array.length < 1) {
    emptyDetails();
  } else {
    array.forEach((item) => {
      domString += `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${item.itemName}</h5>
          <h5 class="card-title">PRICE: ${item.itemPrice}</h5>
          <i class="btn btn-primary" id="edit-details-btn--${item.firebaseKey}">Edit Item</i>
          <i class="btn btn-danger" id="delete-details-btn--${item.firebaseKey}">Delete Item</i>
        </div>
      </div>
      
      <div class="details-btns">
        <button type="button" class="btn btn-success" id="add-item-btn-as">Add Item</button>
        <button type="button" class="btn btn-primary" id="to-payment-btn-as">Go To Payment</button>
      </div>
      `;
    });
  }

  renderToDom('#order-container', domString);
};

export default orderDetails;
