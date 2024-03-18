const express = require("express");
const router = express.Router();
const bandasController = require("../controllers/bandasController")

/* GET home page. */
router.get('/', bandasController.index)
router.get('/bandas/:idBandas', bandasController.idBandas)


module.exports = router;