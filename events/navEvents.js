import getItems from '../api/items';
import orderDetails from '../pages/orderDetails';

const navEvents = (user) => {
  document.querySelector('#view-orders-nav-btn').addEventListener('click', () => {
    getItems(user.uid).then((items) => orderDetails(items));
  });
};

export default navEvents;
