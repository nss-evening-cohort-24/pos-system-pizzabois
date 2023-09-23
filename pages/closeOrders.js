import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const closeOrders = (orderId, total) => {
  clearDom();

  let domString = '';
  domString += `
  <form id='close-order-form--${orderId}--${total}' style="width:332.02px">
    <p>Payment Type</p>
    <select class="form-select" id='close-order-payment-type'  aria-label="Payment Type">
      <option selected disabled>Select A Payment Type</option>
      <option value="cash">Cash</option>
      <option value="credit">Credit</option>
      <option value="mobile">Mobile</option>
    </select>
    <div class="mb-3" id="tip-amount">
      <label for="close-order-tip-input" class="form-label">Tip Amount</label>
      <input type="number" step="any" class="form-control" id="close-order-tip-input" aria-describedby="emailHelp" required>
    </div>
    <div id="tip-auto">
      <p onclick="document.querySelector('#close-order-tip-input').value = (${total} * .1).toFixed(2)">10%</p>
      <p onclick="document.querySelector('#close-order-tip-input').value = (${total} * .15).toFixed(2)">15%</p>
      <p onclick="document.querySelector('#close-order-tip-input').value = (${total} * .2).toFixed(2)">20%</p>
      <p onclick="document.querySelector('#close-order-tip-input').value = (${total} * 1).toFixed(2)">100%</p>
    </div>
    <button type="submit" class="btn btn-dark" style="border: solid 2px darkred" id="close-order-form--${orderId}--${total}">Close Order</button>
  </form>
  `;

  renderToDom('#close-order-container', domString);
};

export default closeOrders;
