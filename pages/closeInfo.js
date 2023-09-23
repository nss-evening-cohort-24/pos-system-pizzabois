import { getRevByOrderId } from '../api/revenue';
import renderToDom from '../utils/renderToDom';

const closeInfo = async (orderId) => {
  const rev = await getRevByOrderId(orderId);
  const revenue = Object.values(rev);
  const domString = `
      <div id="rev-info">
        <p>Close Date: ${revenue[0].date || ''}</p>
      </div>
      <div id="closed-order-info">
        <p>Tips: ${revenue[0].tips || ''}</p>
        <p>Order Type: ${revenue[0].orderType || ''}</p>
        <p>Pay Type: ${revenue[0].payType || ''}</p>
    </div>
    `;
  renderToDom('#close-stuff', domString);
};

export default closeInfo;
