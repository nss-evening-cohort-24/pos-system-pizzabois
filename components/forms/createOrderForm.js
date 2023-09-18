import { getSingleOrder } from '../../api/orders';
import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const showOrderForm = (uid, order = {}) => {
  clearDom();
  const domString = `
  <form id="${order.firebaseKey ? `update-order--${order.firebaseKey}` : 'submit-order'}">
    <div class="mb-3">
      <label for="customerName" class="form-label">Name</label>
      <input type="text" class="form-control d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2" id="customer-name" value="${order.name || ''}" required>
    </div>
    <div class="mb-3">
      <label for="customerEmail" class="form-label">Email address</label>
      <input type="email" class="form-control d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2" id="email-address" aria-describedby="emailHelp"  value="${order.emailAddress || ''}" required>
    </div>
    <div class="mb-3">
      <label for="customerNumber" class="form-label">Phone Number</label>
      <input type="tel" class="form-control d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2"  id="phone-number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value="${order.phoneNumber || ''}" required>
    </div>
    <label for="orderType" class="form-label">Order Type</label>
    <select class="form-select form-select-sm d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2" aria-label="Small select example" id="order-type" required>
      <option selected disabled required>${order.type || ''}</option>
      <option value="Walk-in">Walk-In</option>
      <option value="Call-in">Call-In</option>
    </select>
    <button type="submit" class="btn btn-dark">${order.firebaseKey ? 'Update' : 'Start Order'}</button>
</form>
  `;
  renderToDom('#order-form-container', domString);
  getSingleOrder(`${order.firebaseKey || ''}`, uid);
};

export default showOrderForm;
