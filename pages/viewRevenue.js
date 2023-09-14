import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import {
  revenueTotal,
  revenueCallIn, revenueCash, revenueCredit, revenueMobile, revenueTips, revenueWalkIn
} from '../utils/revenueMath';

const viewRevenue = () => {
  clearDom();
  let domString = '';
  domString += `
  <h1 id='revenue-title'>REVENUE</h1>
  <h1 id='revenue-total'>TOTAL REVENUE: $${revenueTotal()}</h1>
  <div class='revenue-date'>
    <p>DATE RANGE</p>
    <p></p>
  </div> 
  <div clas='revenue-tips>
    <p>TOTAL TIPS: $${revenueTips()}</p>
    <p>TOTAL CALL IN ORDERS: ${revenueCallIn()} </p>
    <p>TOTAL WALK IN ORDERS: ${revenueWalkIn()} </p>
  </div> 
  <div clas='revenue-payment-type>
    <p>PAYMENT TYPES:</p>
    <p>CASH - ${revenueCash()}</p>
    <p>CREDIT - ${revenueCredit()}</p>
    <p>MOBILE - ${revenueMobile()}</p>
  </div> 
  `;

  renderToDom('#revenue-container', domString);
};

export default viewRevenue;
