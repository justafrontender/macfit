export default {
  create(orderData) {
    return new Promise((resolve, reject) => {
      const data = new FormData();
      data.append('request', JSON.stringify(orderData));
      fetch('/api/orders/', { method: 'POST', body: JSON.stringify(orderData) })
        .then(response => response.json())
        .then(obj => {
          resolve(obj);
        })
        .catch(e => reject(e));
    });
  }
};
