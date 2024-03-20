const bandas = require('../db/infoBandas.js')

const controller = {
  index: function (req, res) {
    return res.render("bandas", { title: "Todas las bandas", bandas });
  },
  idBandas: function(req, res) {
    const idBandas = req.params.idBandas
    const idNumber = []
    for (let i = 0; i < bandas.length; i++) {
        if(bandas[i].id == idBandas) {
            idNumber.push(bandas[i])
            res.render("idBandas", {banda: bandas[i]})
        }
    } return res.send(idBandas)
  },
  genero: (req,res)=>{
    let genero = req.params.genero;
    let filtrados = []
    bandas.forEach(element =>{
      if(element.genero == genero){
        filtrados.push(element)
      }
    })
    if(filtrados.length > 0){
      res.render("genero", {bandas: filtrados, genero})
    }else{
      res.send("No existe un genero con ese nombre en la base de datos")
    }
  }
};

module.exports = controller;
