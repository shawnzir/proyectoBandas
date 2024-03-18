const bandas = require('../db/infoBandas.js')

const controller = {
  index: function (req, res) {
    return res.render("bandas", { title: "Todas las bandas", bandas });
  },
  idBandas: function(req, res) {
    const idBandas = req.params.idBandas
    const idNumber = []
    for (let i = 0; i < bandas.length; i++) {
        if(bandas[i].id === idBandas) {
            idNumber.push(bandas[i])
        }
    } return res.send(idBandas)
  } 
};

module.exports = controller;
