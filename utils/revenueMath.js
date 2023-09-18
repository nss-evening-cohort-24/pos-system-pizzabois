import { getRevenue } from '../api/revenue';

const revenueTotal = () => {
  let salesTotal = 0;
  getRevenue().then((rev) => {
    rev.forEach((tot) => {
      salesTotal += Number(tot.total);
    });
    const total = salesTotal.toFixed(2);
    const div = document.querySelector('#revenue-total');
    div.textContent = `TOTAL REVENUE: $${total}`;
  });
};

const revenueTips = () => {
  let tipsTotal = 0;
  getRevenue().then((rev) => {
    rev.forEach((tot) => {
      tipsTotal += Number(tot.tips);
    });
    const total = tipsTotal.toFixed(2);
    const div = document.querySelector('#revenue-tips');
    div.textContent = `TOTAL TIPS: $${total}`;
  });
};

const revenueCallIn = () => {
  getRevenue().then((res) => {
    const calls = res.filter((type) => type.orderType.toLowerCase() === 'call-in');
    const div = document.querySelector('#revenue-call');
    div.textContent = `TOTAL CALL IN ORDERS: ${calls.length}`;
  });
};

const revenueWalkIn = () => {
  getRevenue().then((res) => {
    const walks = res.filter((type) => type.orderType.toLowerCase() === 'walk-in');
    const div = document.querySelector('#revenue-walk');
    div.textContent = `TOTAL WALK IN ORDERS: ${walks.length}`;
  });
};

const revenueCash = () => {
  getRevenue().then((res) => {
    const cash = res.filter((type) => type.payType.toLowerCase() === 'cash');
    const div = document.querySelector('#revenue-cash');
    div.textContent = `CASH - ${cash.length}`;
  });
};

const revenueCredit = () => {
  getRevenue().then((res) => {
    const credit = res.filter((type) => type.payType.toLowerCase() === 'credit');
    const div = document.querySelector('#revenue-credit');
    div.textContent = `CREDIT - ${credit.length}`;
  });
};

const revenueMobile = () => {
  getRevenue().then((res) => {
    const mobile = res.filter((type) => type.payType.toLowerCase() === 'mobile');
    const div = document.querySelector('#revenue-mobile');
    div.textContent = `MOBILE - ${mobile.length}`;
  });
};

export {
  revenueTotal,
  revenueTips,
  revenueCallIn,
  revenueWalkIn,
  revenueCash,
  revenueCredit,
  revenueMobile
};
