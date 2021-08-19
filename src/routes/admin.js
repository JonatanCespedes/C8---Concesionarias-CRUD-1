let express = require('express');
let router = express.Router();
let { 
    index, 
    agregarSucursal, 
    sucursales, 
    crearSucursal } = require('../controllers/adminController')

/* Get - /index */
router.get('/', index)
/* get - /sucursales - listar sucursales */
router.get('/sucursales', sucursales)
/* get - /agregarSucursal - formulario de carga */
router.get('/agregarSucursal', agregarSucursal)
/* post - /agregarSucursal - recibir los datos y guardarlos en la BD */
router.post('/agregarSucursal', crearSucursal)

module.exports = router;