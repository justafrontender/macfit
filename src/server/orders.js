export default {
  create() {
    return new Promise((resolve, reject) => {
      fetch('/api/orders', { method: 'PUT', body: '' })
        .then(response => response.json())
        .then(obj => {
          resolve(obj);
        })
        .catch(e => reject(e));
    });
  }
};
