import { getSingleOrder, getOrders } from '../api/orders';
import showOrders from '../pages/viewOrders';
import noOrders from '../utils/noOrders';
import {
  deleteItem,
  getMenuItems,
  getSingleItem
} from '../api/items';
import { orderDetails } from '../pages/orderDetails';
import viewRevenue from '../pages/viewRevenue';
import showOrderForm from '../components/forms/createOrderForm';
import {
  createOrderItems,
  deleteOrderItem,
  getOrderItemsByOrderId,
  updateOrderItem
} from '../api/orderItems';
import { getOrderDetails, deleteOrderOrderItemsRelationship } from '../api/mergedData';
import closeOrders from '../pages/closeOrders';
import menu from '../pages/menu';
import createItemForm from '../components/forms/createItemForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('order-card-delete-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrderOrderItemsRelationship(firebaseKey).then(() => {
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
      getOrderDetails(firebaseKey).then((array) => orderDetails(array));
    }

    if (e.target.id.includes('order-card-edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderData) => showOrderForm(user.uid, orderData));
    }

    if (e.target.id.includes('item-card-delete-btn')) {
    // eslint-disable-next-line no-alert
      if (window.confirm('Remove?')) {
        const [, firebaseKey, orderId] = e.target.id.split('--');
        getOrderItemsByOrderId(orderId).then((array) => {
          const orderIdArray = array.filter((item) => item.itemId === firebaseKey);
          const orderObject = Object.values(orderIdArray);
          deleteOrderItem(orderObject[0].firebaseKey).then(() => {
            getOrderDetails(orderId).then((arr) => orderDetails(arr));
          });
        });
      }
    }

    if (e.target.id.includes('item-card-select-btn')) {
      const [, firebaseKey, orderId] = e.target.id.split('--');
      const payload = {
        orderId,
        itemId: firebaseKey
      };

      createOrderItems(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrderItem(patchPayload).then(() => {
          getOrderDetails(orderId).then((array) => orderDetails(array));
        });
      });
    }

    if (e.target.id.includes('item-payment-btn')) {
      const [, firebaseKey, total] = e.target.id.split('--');
      closeOrders(firebaseKey, total);
    }
    if (e.target.id.includes('menu-create-btn')) {
      createItemForm(user.uid);
    }
    if (e.target.id.includes('menu-item-edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((itemObj) => createItemForm(user.uid, itemObj));
    }
    if (e.target.id.includes('menu-item-delete-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Remove?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteItem(firebaseKey).then(() => {
          getMenuItems().then((items) => menu(items));
        });
      }
    }
    if (e.target.id.includes('open-orders')) {
      getOrders(user.uid).then((array) => {
        const filter = array.filter((item) => !item.isClosed);
        const filterArray = Object.values(filter);
        showOrders(filterArray);
      });
    }
    if (e.target.id.includes('closed-orders')) {
      getOrders(user.uid).then((array) => {
        const filter = array.filter((item) => item.isClosed);
        const filterArray = Object.values(filter);
        showOrders(filterArray);
      });
    }
    if (e.target.id.includes('all-orders')) {
      getOrders(user.uid).then(showOrders);
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
