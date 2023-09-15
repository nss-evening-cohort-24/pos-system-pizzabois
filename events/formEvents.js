import { createItem, getItems, updateItem } from '../api/items';
import { orderDetails } from '../pages/orderDetails';
import { createOrder, updateOrders, getOrders } from '../api/orders';
import showOrders from '../pages/viewOrders';

const formEvents = (user) => {
  document.querySelector('#item-form-container').addEventListener('submit', (e) => {
    if (e.target.id.includes('item-submit')) {
      const payload = {
        itemName: document.querySelector('#item-name').value,
        itemPrice: document.querySelector('#item-price').value,
        uid: user.uid
      };

      createItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateItem(patchPayload).then(() => {
          getItems(user.uid).then((items) => orderDetails(items));
        });
      });
    }

    if (e.target.id.includes('item-edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        itemName: document.querySelector('#item-name').value,
        itemPrice: document.querySelector('#item-price').value,
        uid: user.uid,
        firebaseKey,
      };

      updateItem(payload).then(() => {
        getItems(user.uid).then(orderDetails);
      });
    }
  });

  document.querySelector('#main-container').addEventListener('submit', (e) => {
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
