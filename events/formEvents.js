import getOrderItemsByOrderId from '../api/orderItems';
import { createRevenue, updateRevenue } from '../api/revenue';
import homePage from '../pages/homePage';

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
};

export default formEvents;
