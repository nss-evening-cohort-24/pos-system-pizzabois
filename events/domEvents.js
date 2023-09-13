<<<<<<< HEAD
import { deleteOrder, getOrdersByUid } from '../api/orders';
import showOrders from '../pages/viewOrders';
import noOrders from '../utils/noOrders';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('order-card-delete-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrder(firebaseKey).then(() => {
          getOrdersByUid(user.uid).then((array) => {
            if (array.length) {
              showOrders(array);
            } else {
              noOrders();
            }
          });
        });
      }
=======
import getItems from '../api/items';
import orderDetails from '../pages/orderDetails';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('order-card-details')) {
      getItems(user.uid).then((items) => orderDetails(items));
>>>>>>> main
    }
  });
};

export default domEvents;
