export default {
  get() {
    return new Promise((resolve, reject) => {
      fetch('/api/catalogSections/')
        .then(response => response.json())
        .then(obj => {
          resolve(obj);
        })
        .catch(e => reject(e));
    });
  }
};
