import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import homePage from '../pages/homePage';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  homePage(user);
  domEvents(user);
  formEvents(user);
  navEvents(user);
};

export default startApp;
