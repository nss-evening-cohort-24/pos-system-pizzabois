import { getSingleOrder, deleteOrder, getOrders } from '../api/orders';
import showOrders from '../pages/viewOrders';
import noOrders from '../utils/noOrders';
import {
  getItems, deleteItem, getSingleItem, getItemsOrderId
} from '../api/items';
import { orderDetails, emptyDetails } from '../pages/orderDetails';
import viewRevenue from '../pages/viewRevenue';
import createItemForm from '../components/forms/createItemForm';
import showOrderForm from '../components/forms/createOrderForm';
import showItems from '../components/modal/showItems';
// import addItemModal from '../components/modal/addItemModal';

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
      const [, firebaseKey] = e.target.id.split('--');
      getItems(firebaseKey).then((items) => orderDetails(items, firebaseKey)).then(showItems);
    }

    if (e.target.id.includes('order-card-edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderData) => showOrderForm(user.uid, orderData));
    }

    if (e.target.id.includes('item-card-delete-btn')) {
    // eslint-disable-next-line no-alert
      if (window.confirm('Remove?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteItem(firebaseKey).then(() => {
          getItems(user.uid).then((itemArr) => {
            if (itemArr.length) {
              orderDetails(itemArr);
            } else {
              emptyDetails();
            }
          });
        });
      }
    }

    // if (e.target.id.includes('add-item-modal')) {
    //   getItems().then((items) => orderDetails(items));
    // }

    if (e.target.id.includes('item-card-edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((itemObj) => createItemForm(user.uid, itemObj));
    }

    if (e.target.id.includes('item-payment-btn')) {
      console.warn('clicked');
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
