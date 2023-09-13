import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  navEvents(user);
};

export default startApp;
