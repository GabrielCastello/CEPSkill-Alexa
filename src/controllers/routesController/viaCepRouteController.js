const ViaCep = require("../ViaCepController");
class ViaCepRouteController {
  static getCEP(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const { UF, city, addressName } = req.body;
        const CEP = await new ViaCep(UF, city, addressName).CEP();
        res.send(CEP);
      } catch (err) {
        console.log("TCL: ViaCepRouteController -> getCEP -> err", err);
        res.status(500).send(err);
      }
    });
  }
}

module.exports = ViaCepRouteController;
