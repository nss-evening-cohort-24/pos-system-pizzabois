import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import {
  revenueTotal, revenueCallIn, revenueCash, revenueCredit, revenueMobile, revenueTips, revenueWalkIn
} from '../utils/revenueMath';

const viewRevenue = () => {
  clearDom();
  let domString = '';
  domString += `
  <h1 id='revenue-title'>REVENUE</h1>
  <h1 id='revenue-total'></h1>
  <div class='revenue-date'>
    <p>DATE RANGE: All Time</p>
  </div> 
  <div class='rev1'>
    <p id='revenue-tips'></p>
    <p id='revenue-call'></p>
    <p id='revenue-walk'></p>
  </div> 
  <div class='revenue-payment-type'>
    <p>PAYMENT TYPES:</p>
    <p id='revenue-cash'></p>
    <p id='revenue-credit'></p>
    <p id='revenue-mobile'></p>
  </div> 
  `;

  renderToDom('#revenue-container', domString);
  revenueTotal();
  revenueTips();
  revenueWalkIn();
  revenueCallIn();
  revenueCash();
  revenueCredit();
  revenueMobile();
};

export default viewRevenue;
