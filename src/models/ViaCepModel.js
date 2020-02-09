const secret = new WeakMap();
class ViaCep {
  constructor(UF, city, addressName) {
    secret.set(this, {
      _UF: UF,
      _URL: `https://viacep.com.br/ws/`,
      _city: city,
      _addressName: addressName,
      _returnFormat: "json"
    });
  }

  _requestURL() {
    return `${secret.get(this)._URL}${secret.get(this)._UF}/${secret.get(this)._city}/${secret.get(this)._addressName}/${secret.get(this)._returnFormat}`;
  }
}

module.exports = ViaCep;
