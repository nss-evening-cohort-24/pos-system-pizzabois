import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const closeOrders = (orderId, total) => {
  clearDom();

  let domString = '';
  domString += `
  <form id='close-order-form--${orderId}--${total}'>
    <select class="form-select" id='close-order-payment-type' aria-label="Payment Type">
      <option selected>Select A Payment Type</option>
      <option value="cash">Cash</option>
      <option value="credit">Credit</option>
      <option value="mobile">Mobile</option>
    </select>
    <div class="mb-3">
      <label for="close-order-tip-input" class="form-label">Tip Amount</label>
      <input type="number" name="currency" class="form-control" id="close-order-tip-input" aria-describedby="emailHelp" required>
    </div>
    <button type="submit" class="btn btn-dark" style="border: solid 2px darkred" id="close-order-form--${orderId}--${total}">Close Order</button>
  </form>
  `;

  renderToDom('#close-order-container', domString);
};

export default closeOrders;
