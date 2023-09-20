import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';
import addItemModal from '../components/modal/addItemModal';
import showItems from '../components/modal/showItems';

let domString = '';

const emptyDetails = () => {
  domString = '<h2 id="no-orders-msg" class="mb-5" style="color:#FFB700;">No items have been added yet</h2>';
  renderToDom('#item-container', domString);
};

const orderDetails = (array) => {
  clearDom();

  domString = '<h1 class="text-center mb-5" id="items-header">Your Items</h1>';
  let total = 0;

  if (!array.orderItems.length) {
    emptyDetails();
  } else {
    array.orderItems.forEach((item) => {
      domString += `
      <div class="card" style="margin: 0 auto;margin-bottom:50px;width:50%;float:none;">
        <div class="card-body" style="text-align:center;margin-left:22px;">
          <h3 class="card-title" style="text-align:center;">${item.itemName}</h3>
          <h6 class="mb-3 mt-3" style="color:#70888f">||&nbsp&nbsp&nbsp${item.itemDescription}&nbsp&nbsp||</h6>
          <h4 class="card-title mt-2 mb-3">$${item.itemPrice}</h4>
          <i class="btn btn-danger" id="item-card-delete-btn--${item.firebaseKey}--${array.firebaseKey}">Delete Item</i>
        </div>
      </div>`;

      const totalPrice = parseFloat(item.itemPrice);
      if (!Number.isNaN(totalPrice)) {
        total += totalPrice;
      }
    });
  }

  // button below for use if decided
  // <i class="btn btn-warning" id="item-card-edit-btn--${item.firebaseKey}">Edit Item</i>

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
