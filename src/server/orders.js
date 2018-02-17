export default {
  create(payload) {
    return new Promise((resolve, reject) => {
      fetch('/api/orders', { method: 'POST', body: payload })
        .then(response => response.json())
        .then(obj => {
          resolve(obj);
        })
        .catch(e => reject(e));
    });
  }
};
