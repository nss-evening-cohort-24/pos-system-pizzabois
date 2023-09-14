import { createItem, getItems, updateItem } from '../api/items';
import { orderDetails } from '../pages/orderDetails';

const formEvents = (user) => {
  document.querySelector('#item-form-container').addEventListener('submit', (e) => {
    if (e.target.id.includes('item-form-submit')) {
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

    if (e.target.id.includes('item-card-edit-btn')) {
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
};

export default formEvents;
