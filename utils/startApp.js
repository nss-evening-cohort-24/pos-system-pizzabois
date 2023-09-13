import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  navEvents(user);
  domEvents(user);
};

export default startApp;
