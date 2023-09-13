import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import closeOrders from '../pages/closeOrders';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  closeOrders();
  domEvents();
  navEvents(user);
};

export default startApp;
