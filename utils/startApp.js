import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import homePage from '../pages/homePage';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  homePage(user);
  navEvents(user);
  domEvents(user);
};

export default startApp;
