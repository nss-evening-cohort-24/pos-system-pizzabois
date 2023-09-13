import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewRevenue = () => {
  clearDom();
  let domString = '';
  domString += `
  <h1 id='revenue-title'>REVENUE</h1>
  <h1 id='revenue-total'>TOTAL REVENUE:</h1>
  <div class='revenue-date'>
    <p>DATE RANGE</p>
    <p></p>
  </div> 
  <div clas='revenue-tips>
    <p>TOTAL TIPS: </p>
    <p>TOTAL CALL IN ORDERS: </p>
    <p>TOTAL WALK IN ORDERS: </p>
  </div> 
  <div clas='revenue-payment-type>
    <p>PAYMENT TYPES:</p>
    <p>CASH - </p>
    <p>CREDIT - </p>
    <p>MOBILE - </p>
  </div> 
  `;

  renderToDom('#revenue-container', domString);
};

export default viewRevenue;
