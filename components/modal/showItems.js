import { getMenuItems } from '../../api/items';
import renderToDom from '../../utils/renderToDom';

const showItems = () => {
  let domString = '';
  getMenuItems().then((array) => {
    array.forEach((item) => {
      domString += `
      <div style="width:42%;">
        <div class="card">
          <div class="card-body" style="text-align:center;">
            <h5 class="card-title">${item.itemName}</h5>
            <h5 class="card-title">PRICE: ${item.itemPrice}</h5>
            <i class="btn btn-warning" class="right" id="item-card-edit-btn--${item.firebaseKey}">Select</i>
    
          </div>
        </div>
      </div>`;
    });
    renderToDom('#modalItemsBody', domString);
  });
};

export default showItems;
