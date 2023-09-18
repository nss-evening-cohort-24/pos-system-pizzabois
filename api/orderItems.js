import client from '../utils/client';

const endpoint = client.databaseURL;

const createOrderItems = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderItems.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOrderItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderItems/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getOrderItemsByOrderId = (orderId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderItems.json?orderBy="orderId"&equalTo="${orderId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getOrderItems = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderItems.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  createOrderItems,
  getOrderItemsByOrderId,
  updateOrderItem,
  getOrderItems
};
