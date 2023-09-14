import renderToDom from '../utils/renderToDom';

const closeOrders = (obj) => {
  let domString = '';
  domString += `
  <form id='close-order-form'>
    <select class="form-select" id='close-order-payment-type' aria-label="Payment Type">
      <option selected>Select A Payment Type</option>
      <option value="cash">Cash</option>
      <option value="credit">Credit</option>
      <option value="mobile">Mobile</option>
    </select>
    <div class="mb-3">
      <label for="close-order-tip-input" class="form-label">Tip Amount</label>
      <input type="number" name="currency" class="form-control" id="close-order-tip-input" aria-describedby="emailHelp">
    </div>
    <button type="submit" class="btn btn-primary" id='close-order-form--${obj.firebaseKey}--${obj.type}'>Close Order</button>
  </form>
  `;

  renderToDom('#close-order-container', domString);
};

export default closeOrders;
