import renderToDom from '../utils/renderToDom';

const homePage = (user) => {
  let domString = '';
  domString += `
    <h1 id='home-title'>Welcome, ${user.name}!</h1>
    <button type="button" class="btn btn-secondary" id='home-view-orders-btn'>View Orders</button>
    <button type="button" class="btn btn-secondary" id='home-create-order-btn'>Create An Order</button>
    <button type="button" class="btn btn-secondary" id='home-view-revenue-btn'>View Revenue</button>
  `;

  renderToDom('#landing-page', domString);
};

export default homePage;
