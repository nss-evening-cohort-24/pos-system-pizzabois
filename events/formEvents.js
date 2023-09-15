import getOrderItemsByOrderId from '../api/orderItems';
import { createRevenue, updateRevenue } from '../api/revenue';
import homePage from '../pages/homePage';
import { createOrder, updateOrders, getOrders } from '../api/orders';
import showOrders from '../pages/viewOrders';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('close-order-form')) {
      const [, fbKey, type] = e.target.id.split('--');
      const date = (new Date()).toLocaleString('en-US');
      const itemObj = getOrderItemsByOrderId(fbKey);
      const totalPrice = itemObj.items.reduce((a, b) => a + b.itemPrice, 0);

      const payload = {
        orderId: fbKey,
        date: date.toString(),
        total: totalPrice,
        payType: document.querySelector('close-order-payment-type').value,
        orderType: type,
        tips: document.querySelector('close-order-tip-input').value
      };

      createRevenue(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateRevenue(patchPayload).then(() => {
          homePage(user);
        });
      });
    }
  });
  document.querySelector('#order-form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      const payload = {
        name: document.querySelector('#customer-name').value,
        isClosed: false,
        type: document.querySelector('#order-type').value,
        emailAddress: document.querySelector('#email-address').value,
        phoneNumber: document.querySelector('#phone-number').value,
        uid: user.uid
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrders(patchPayload).then(() => {
          getOrders(user.uid).then(showOrders);
        });
      });
    }
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#customer-name').value,
        isClosed: false,
        type: document.querySelector('#order-type').value,
        emailAddress: document.querySelector('#email-address').value,
        phoneNumber: document.querySelector('#phone-number').value,
        uid: user.uid,
        firebaseKey
      };

      updateOrders(payload).then(() => {
        getOrders(user.uid).then(showOrders);
      });
    }
  });
};

export default formEvents;
