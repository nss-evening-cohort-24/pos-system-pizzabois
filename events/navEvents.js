// import getOrdersByUid from '../api/orders';
import showOrders from '../pages/viewOrders';

import { getOrdersByUid } from '../api/orders';
import { signOut } from '../utils/auth';
import showOrderForm from '../components/forms/createOrderForm';
import homePage from '../pages/homePage';

const navEvents = (user) => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    if (e.target.id.includes('view-orders-nav-btn')) {
      getOrdersByUid(user.uid).then((orders) => showOrders(orders));
    }
    if (e.target.id.includes('logout-nav-btn')) {
      signOut();
    }
    if (e.target.id.includes('create-orders-nav-btn')) {
      showOrderForm();
    }
    if (e.target.id.includes('home-page-logo-btn')) {
      homePage(user);
    }
  });
};

export default navEvents;
