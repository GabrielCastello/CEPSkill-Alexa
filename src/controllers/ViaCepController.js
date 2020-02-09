const secret = new WeakMap();
const ViaCepModel = require("../models/ViaCepModel");
const MyAxios = require("../models/MyAxios");

class ViaCep extends ViaCepModel {
  constructor(UF, city, addressName) {
    super(UF, city, addressName);
    secret.set(this, {
      _response: undefined
    });
  }

  _searchForCEP() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await new MyAxios().get(this._requestURL());
        secret.set(this, {
          _response: response
        });
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  }

  isValid() {
    const response = secret.get(this)._response;
    if (Array.isArray(response) && response.length > 0) return true;
    else return false;
  }

  async CEP() {
    await this._searchForCEP();
    const response = secret.get(this)._response;
    return this.isValid()
      ? response.length == 1
        ? { status: true, body: response[0] }
        : { status: false, body: `Muitos resultados encontrados, por favor informe o nome completo do logradouro.` }
      : { status: false, body: `CEP não encontrado` };
  }
}

module.exports = ViaCep;
