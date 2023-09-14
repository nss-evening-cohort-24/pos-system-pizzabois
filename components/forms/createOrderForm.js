import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const showOrderForm = (uid, order = {}) => {
  clearDom();
  const domString = `
  <form id="${order.firebaseKey ? `update-order--${order.firebaseKey}` : 'submit-order'}">
    <div class="mb-3">
      <label for="customerName" class="form-label">Name</label>
      <input type="text" class="form-control" id="customer-name" value="${order.name || ''}" required>
    </div>
    <div class="mb-3">
      <label for="customerEmail" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email-address" aria-describedby="emailHelp"  value="${order.emailAddress || ''}" required>
    </div>
    <div class="mb-3">
      <label for="customerNumber" class="form-label">Phone Number</label>
      <input type="numeric" class="form-control" id="phone-number"  value="${order.phoneNumber || ''}" required>
    </div>
    <label for="orderType" class="form-label">Order Type</label>
    <select class="form-select form-select-sm" aria-label="Small select example" id="order-type" required>
      <option selected disabled required>${order.type || ''}</option>
      <option value="Walk-in">Walk-In</option>
      <option value="Call-in">Call-In</option>
    </select>
    <button type="submit" class="btn btn-primary">${order.firebaseKey ? 'Update' : 'Start Order'}</button>
</form>
  `;
  renderToDom('#order-form-container', domString);
};

export default showOrderForm;
