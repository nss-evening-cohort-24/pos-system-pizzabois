import { getSingleItem } from './items';
import { getOrderItemsByOrderId } from './orderItems';
import { getSingleOrder } from './orders';

const getOrderDetails = async (orderId) => {
  // Get Order
  const order = await getSingleOrder(orderId);

  // Get OrderItems Related to Order
  const allOrderItems = await getOrderItemsByOrderId(orderId);

  // Get The Items Found In The OrderItems, Returns Array of Promises
  const getSingleItems = await allOrderItems.map((item) => getSingleItem(item.itemId));

  // Promise.all() To Return Each Item Object
  const orderItems = await Promise.all(getSingleItems);

  // Returns Single Order And All Items In Order
  return { ...order, orderItems };
};

export default getOrderDetails;
