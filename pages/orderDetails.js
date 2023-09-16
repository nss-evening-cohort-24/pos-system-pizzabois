import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const emptyDetails = () => {
  const domString = '<h2 id="no-orders-msg">No orders have been made yet!</h2>';
  renderToDom('#order-container', domString);
};

const orderDetails = (array) => {
  clearDom();

  let domString = '<h1 class="text-center mt-5 mb-5" id="items-header">Your Items</h1>';
  let total = 0;

  if (array.length < 1) {
    emptyDetails();
  } else {
    array.forEach((item) => {
      domString += `
      <div class="card" style="margin: 0 auto;margin-bottom:50px;width:75%;float:none;">
        <div class="card-body" style="text-align:left;margin-left:22px;">
          <h5 class="card-title">${item.itemName}</h5>
          <h5 class="card-title">PRICE: ${item.itemPrice}</h5>
          <i class="btn btn-warning" id="item-card-edit-btn--${item.firebaseKey}">Edit Item</i>
          <i class="btn btn-danger" id="item-card-delete-btn--${item.firebaseKey}">Delete Item</i>
        </div>
      </div>`;

      const totalPrice = parseFloat(item.itemPrice);
      if (!Number.isNaN(totalPrice)) {
        total += totalPrice;
      }
    });
  }

  // MAKE CONTAINER FOR TOTAL AND CONTAINER FOR VIEW ITEMS, RENDER TOTAL FROM THE ITEMS CONTAINER INTO TOTAL CONTAINER

  domString += `<h1 id="order-details-total" class="mb-5" "style="text-align:center;font-weight:bold;font-size:84px;">TOTAL: $${total.toFixed(2)}</h1>`;

  domString += `
    <div class="details-btns mb-4">
      <button type="button" class="btn btn-success" style="width:25%;height:64px;margin-right:12px;" id="item-add-btn-as">Add Item</button>
      <button type="button" class="btn btn-primary" style="width:25%;height:64px;margin-left:12px;" id="item-payment-btn-as">Go To Payment</button>
    </div>`;

  renderToDom('#item-container', domString);
};

export { orderDetails, emptyDetails };
