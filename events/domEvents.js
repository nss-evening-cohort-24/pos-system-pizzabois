import { getSingleOrder, deleteOrder, getOrders } from '../api/orders';
import showOrders from '../pages/viewOrders';
import noOrders from '../utils/noOrders';
import getItems from '../api/items';
import orderDetails from '../pages/orderDetails';
import viewRevenue from '../pages/viewRevenue';
import showOrderForm from '../components/forms/createOrderForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('order-card-delete-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrder(firebaseKey).then(() => {
          getOrders(user.uid).then((array) => {
            if (array.length) {
              showOrders(array);
            } else {
              noOrders();
            }
          });
        });
      }
    }
    if (e.target.id.includes('order-card-details')) {
      getItems(user.uid).then((items) => orderDetails(items));
    }
    if (e.target.id.includes('order-card-edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderData) => showOrderForm(user.uid, orderData));
    }
  });
  document.querySelector('#landing-page').addEventListener('click', (e) => {
    if (e.target.id.includes('home-view-revenue-btn')) {
      viewRevenue();
    }
    if (e.target.id.includes('home-view-orders-btn')) {
      getOrders(user.uid).then((orders) => showOrders(orders));
    }
    if (e.target.id.includes('home-create-order-btn')) {
      showOrderForm();
    }
  });
};

export default domEvents;
