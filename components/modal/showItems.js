import { getMenuItems } from '../../api/items';
import renderToDom from '../../utils/renderToDom';

const showItems = (orderId) => {
  let domString = '';
  getMenuItems().then((array) => {
    console.warn(getMenuItems());
    array.forEach((item) => {
      domString += `
      <div>
        <div class="card" style="margin: 0 auto;margin-bottom:50px;width:75%;float:none;">
          <div class="card-body" style="text-align:left;margin-left:22px;">
            <h5 class="card-title">${item.itemName}</h5>
            <h5 class="card-title">PRICE: ${item.itemPrice}</h5>
            <i class="btn btn-warning" data-bs-dismiss="modal" id="item-card-select-btn--${item.firebaseKey}--${orderId}">Select</i>
    
          </div>
        </div>
      </div>`;
    });
    renderToDom('#modalItemsBody', domString);
  });
};

export default showItems;
