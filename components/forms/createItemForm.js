import { getSingleItem } from '../../api/items';
import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const createItemForm = (uid, obj = {}) => {
  clearDom();

  const domString = `
  <form id="${obj.firebaseKey ? `item-edit-btn--${obj.firebaseKey}` : 'item-submit'}">
  <div class="mb-3 mt-4" style="text-align:center;">
    <label for="item-name" class="form-label" style="font-size:24px;color:white;">Item Name *</label>
    <input type="text" class="form-control" id="item-name" style="margin: 0 auto;width:25%;" aria-describedby="itemName" placeholder="Spicy BBQ Chicken Pizza" value="${obj.itemName || ''}" required>
  </div>
  <div class="mb-3">
    <label for="item-price" class="form-label" style="font-size:24px;color:white;">Item Price *</label>
    <input type="text" class="form-control" id="item-price" style="margin: 0 auto;width:25%;" placeholder="24.99" value="${obj.itemPrice || ''}" required>
  </div>
  <button type="submit" class="btn btn-success" id="item-form-submit-btn">${obj.firebaseKey ? 'Update Item' : 'Add Item'}</button>
</form>
  `;

  renderToDom('#item-form-container', domString);
  getSingleItem(`${obj.firebaseKey || ''}`, uid);
};

export default createItemForm;
