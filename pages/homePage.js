import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const homePage = (user) => {
  clearDom();
  const welcome = (person) => {
    let welcomeString = '';
    if (person.name) {
      welcomeString += `Welcome, ${user.name}!`;
    } else {
      welcomeString += 'Welcome!';
    }
    return welcomeString;
  };

  let domString = '';
  domString += `
    <h1 id='home-title'>${welcome(user)}</h1>
    <button type="button" class="btn btn-secondary" id='home-view-orders-btn'>View Orders</button>
    <button type="button" class="btn btn-secondary" id='home-create-order-btn'>Create An Order</button>
    <button type="button" class="btn btn-secondary" id='home-view-revenue-btn'>View Revenue</button>
  `;

  renderToDom('#landing-page', domString);
};

export default homePage;
