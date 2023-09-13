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
