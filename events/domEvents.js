import getItems from '../api/items';
import orderDetails from '../pages/orderDetails';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('order-card-details')) {
      getItems(user.uid).then((items) => orderDetails(items));
    }
  });
};

export default domEvents;
import getOrdersByUid from '../api/orders';
import showOrders from '../pages/viewOrders';
import viewRevenue from '../pages/viewRevenue';

const domEvents = (user) => {
  document.querySelector('#landing-page').addEventListener('click', (e) => {
    if (e.target.id.includes('home-view-revenue-btn')) {
      viewRevenue();
    }
    if (e.target.id.includes('home-view-orders-btn')) {
      getOrdersByUid(user.uid).then((orders) => showOrders(orders));
    }
  });
};

export default domEvents;
