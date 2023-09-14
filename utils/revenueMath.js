import { getRevenue } from '../api/revenue';

const revenueTotal = async () => {
  const revenue = await getRevenue();

  const revenueArray = await revenue.map((item) => item.total);
  const sum = revenueArray.reduce((a, b) => a + b, 0);
  return sum;
};

const revenueTips = async () => {
  const revenue = await getRevenue();

  const revenueArray = await revenue.map((item) => item.tips);
  const sum = revenueArray.reduce((a, b) => a + b, 0);
  return sum;
};

const revenueCallIn = async () => {
  const revenue = await getRevenue();

  const revenueArray = await revenue.map((item) => item.orderType === 'call-in');
  const sum = revenueArray.length;
  return sum;
};

const revenueWalkIn = async () => {
  const revenue = await getRevenue();

  const revenueArray = await revenue.map((item) => item.orderType === 'walk-in');
  const sum = revenueArray.length;
  return sum;
};

const revenueCash = async () => {
  const revenue = await getRevenue();

  const revenueArray = await revenue.map((item) => item.payType.toLowerCase === 'cash');
  const sum = revenueArray.length;
  return sum;
};

const revenueCredit = async () => {
  const revenue = await getRevenue();

  const revenueArray = await revenue.map((item) => item.payType.toLowerCase === 'credit');
  const sum = revenueArray.length;
  return sum;
};

const revenueMobile = async () => {
  const revenue = await getRevenue();

  const revenueArray = await revenue.map((item) => item.payType.toLowerCase === 'mobile');
  const sum = revenueArray.length;
  return sum;
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
