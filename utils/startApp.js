import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import closeOrders from '../pages/closeOrders';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  closeOrders();
  domEvents();
  logoutButton();
};

export default startApp;
