const express = require("express");
const router = express.Router();
const bandasController = require("../controllers/bandasController")

/* GET home page. */
router.get('/', bandasController.index)
router.get('/:idBandas', bandasController.idBandas)
router.get('/genero/:genero', bandasController.genero)

module.exports = router;