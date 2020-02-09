const secret = new WeakMap();
const axios = require("axios");

class MyAxios {
  constructor() {
    secret.set(this, {
      _axios: axios,
      _url: undefined
    });
  }

  get(URL) {
    return new Promise((resolve, reject) => {
      secret
        .get(this)
        ._axios.get(URL)
        .then(result => resolve(result.data))
        .catch(err => reject(err));
    });
  }
}

module.exports = MyAxios;
