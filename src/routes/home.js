let express = require('express');
let router = express.Router();
let controller = require('../controllers/homeController')

/* GET - Muestra todas las sucursales*/
router.get('/', controller.index)


module.exports = router;