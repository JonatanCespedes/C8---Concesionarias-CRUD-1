const { getSucursales, getAutos, writeJson } = require('../data/dataBase');

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
        let lastId = 1;

        getSucursales.forEach(sucursal => {
            if(sucursal.id > lastId){
                lastId = sucursal.id
            }
        });

        let nuevaSucursal = {
            id: lastId + 1,
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            imagen: "sucursal.jpg" 
        }

        getSucursales.push(nuevaSucursal);

        writeJson(getSucursales)

        res.redirect('/admin/sucursales')
    },
}