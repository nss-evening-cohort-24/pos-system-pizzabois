// import getOrdersByUid from '../api/orders';
import showOrders from '../pages/viewOrders';

import { getOrders, searchOrders, searchOrdersByPhone } from '../api/orders';
import { signOut } from '../utils/auth';
import showOrderForm from '../components/forms/createOrderForm';
import homePage from '../pages/homePage';
import noOrders from '../utils/noOrders';
import createItemForm from '../components/forms/createItemForm';
import clearDom from '../utils/clearDom';

const navEvents = (user) => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    if (e.target.id.includes('view-orders-nav-btn')) {
      getOrders(user.uid).then((orders) => showOrders(orders));
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
    if (e.target.id.includes('item-add-btn')) {
      createItemForm(user.uid);
    }
  });

  document.querySelector('#search').addEventListener('keyup', (event) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();

    if (event.keyCode === 13) {
      searchOrders(searchValue, user.uid).then((search) => {
        if (search.length) {
          event.preventDefault();
          showOrders(search);
        } else {
          clearDom();
          noOrders();
        }
      });

      document.querySelector('#search').value = '';
    }
    if (event.keyCode === 13) {
      searchOrdersByPhone(searchValue, user.uid).then((search) => {
        if (search.length) {
          event.preventDefault();
          showOrders(search);
        } else {
          clearDom();
          noOrders();
        }
      });

      document.querySelector('#search').value = '';
    }
  });
};

export default navEvents;
