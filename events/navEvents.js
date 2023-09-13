// import getOrdersByUid from '../api/orders';
import showOrders from '../pages/viewOrders';

import { getOrdersByUid } from '../api/orders';
import { signOut } from '../utils/auth';

const navEvents = (user) => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    if (e.target.id.includes('view-orders-nav-btn')) {
      getOrdersByUid(user.uid).then((orders) => showOrders(orders));
    }
    if (e.target.id.includes('logout-nav-btn')) {
      signOut();
    }
  });
};

export default navEvents;
