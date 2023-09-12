import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="nav-bar"></div>
  <div id="main-container">
    <div id="landing-page"></div>
    <div id="order-container"></div>
    <div id="order-form-container"></div>
    <div id="item-container"></div>
    <div id="item-form-container"></div>
    <div id="close-order-container"></div>
    <div id="revenue-container"></div>
  </div>`;
  renderToDom('#app', domString);
};

export default domBuilder;
