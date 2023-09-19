import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';
import addItemModal from '../components/modal/addItemModal';
import showItems from '../components/modal/showItems';

const emptyDetails = () => {
  const domString = '<h2 id="no-orders-msg">No items have been added yet</h2>';
  renderToDom('#order-container', domString);
};

const orderDetails = (array) => {
  clearDom();

  let domString = '<h1 class="text-center mt-5 mb-5" id="items-header">Your Items</h1>';
  let total = 0;

  if (array.orderItems < 0) {
    emptyDetails();
  } else {
    array.orderItems.forEach((item) => {
      domString += `
      <div class="card" style="margin: 0 auto;margin-bottom:50px;width:75%;float:none;">
        <div class="card-body" style="text-align:lefst;margin-left:22px;">
          <h5 class="card-title">${item.itemName}</h5>
          <h5 class="card-title">PRICE: ${item.itemPrice}</h5>
          <i class="btn btn-warning" id="item-card-edit-btn--${item.firebaseKey}">Edit Item</i>
          <i class="btn btn-danger" id="item-card-delete-btn--${item.firebaseKey}--${array.firebaseKey}">Delete Item</i>
        </div>
      </div>`;

      console.warn(domString);

      const totalPrice = parseFloat(item.itemPrice);
      if (!Number.isNaN(totalPrice)) {
        total += totalPrice;
      }
    });
  }

  // MAKE CONTAINER FOR TOTAL AND CONTAINER FOR VIEW ITEMS, RENDER TOTAL FROM THE ITEMS CONTAINER INTO TOTAL CONTAINER

  domString += `<h1 id="order-details-total" class="mb-5" "style="text-align:center;font-weight:bold;font-size:84px;">TOTAL: $${total.toFixed(2)}</h1>`;

  domString += `
    <div class="details-btn mb-4">
      ${addItemModal()}
      <button type="button" class="btn btn-dark" style="width:25%;height:64px;margin-left:12px;" id="item-payment-btn-as--${array.firebaseKey}--${total.toFixed(2)}">Go To Payment</button>
    </div>`;

  renderToDom('#item-container', domString);
  showItems(array.firebaseKey);
};

export { orderDetails, emptyDetails };
