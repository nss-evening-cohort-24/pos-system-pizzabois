import client from '../utils/client';

const endpoint = client.databaseURL;

const getOrderItemsByOrderId = (orderId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders).json?orderBy="orderId"&equalTo="${orderId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getOrderItemsByOrderId;
