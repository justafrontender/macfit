export default {
  get() {
    return new Promise((resolve, reject) => {
      fetch('/api/products/')
        .then(response => response.json())
        .then(obj => {
          resolve(obj);
        })
        .catch(e => reject(e));
    });
  }
};
