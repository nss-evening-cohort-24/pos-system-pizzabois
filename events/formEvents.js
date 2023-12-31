import { createRevenue, updateRevenue } from '../api/revenue';
import {
  createOrder, updateOrders, getOrders, getSingleOrder
} from '../api/orders';
import showOrders from '../pages/viewOrders';
import {
  createItem, getMenuItems, updateItem
} from '../api/items';
import { orderDetails } from '../pages/orderDetails';
import menu from '../pages/menu';
import { getOrderDetails } from '../api/mergedData';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('close-order-form')) {
      const [, firebaseKey, orderTotal] = e.target.id.split('--');
      const date = (new Date()).toLocaleString('en-US');

      getSingleOrder(firebaseKey).then((array) => {
        const payload = {
          orderId: firebaseKey,
          date: date.toString(),
          total: orderTotal,
          payType: document.querySelector('#close-order-payment-type').value,
          orderType: array.type,
          tips: document.querySelector('#close-order-tip-input').value
        };
        const closedPayload = { firebaseKey, isClosed: true };
        updateOrders(closedPayload).then(() => {
          createRevenue(payload).then(({ name }) => {
            const patchPayload = { firebaseKey: name };

            updateRevenue(patchPayload).then(() => {
              getOrders(user.uid).then(showOrders);
            });
          });
        });
      });
    }
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
          getOrderDetails(name).then((order) => orderDetails(order));
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

  document.querySelector('#item-form-container').addEventListener('submit', (e) => {
    if (e.target.id.includes('item-submit')) {
      const payload = {
        itemName: document.querySelector('#item-name').value,
        itemDescription: document.querySelector('#item-description').value,
        itemPrice: document.querySelector('#item-price').value,
        uid: user.uid
      };

      createItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateItem(patchPayload).then(() => {
          getMenuItems().then(menu);
        });
      });
    }

    if (e.target.id.includes('menu-edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        itemName: document.querySelector('#item-name').value,
        itemDescription: document.querySelector('#item-description').value,
        itemPrice: document.querySelector('#item-price').value,
        uid: user.uid,
        firebaseKey
      };

      updateItem(payload).then(() => {
        getMenuItems().then(menu);
      });
    }
  });
};

export default formEvents;
