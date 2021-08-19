const { getSucursales, getAutos } = require('../data/dataBase');

module.exports = {
    index: (req, res) => {
        res.render("admin/adminIndex")
    },
    sucursales: (req, res) => {
        res.render('admin/adminSucursales', {
            sucursales: getSucursales,
            autos: function (idSucursal){
                return getAutos.filter(auto => {
                    return auto.sucursal === idSucursal
                })
            }
        })
    },
    agregarSucursal: (req, res) => {
        res.render('admin/agregarSucursal')
    },
    crearSucursal: (req, res) => {

    },
}