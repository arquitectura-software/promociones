
const tienda = require('../modelos/tienda');

var tiendaControllers = {

    getTiendas: (req, res) => {
        tienda.getTiendas((err, data) => {
            res.status(200).json(data);
        });
    },

    getTienda: (req, res) => {
        tienda.getTienda(parseInt(req.params.id), (err, data) => {
            res.status(200).json(data);
        })
    },

    addTienda: (req, res) => {
        const datosTienda = {
            id_tienda: null,
            categoria: req.body.categoria,
            ubicacion: req.body.ubicacion,
            nombre: req.body.nombre
        }

        tienda.insertarTienda(datosTienda, (err, data) => {
            if (data) {
                res.json({
                    success: true,
                    msg: 'tienda insertada',
                    data: data
                })
            } else {
                res.status(500).json({
                    success: false,
                    data: 'Error'
                })
            }
        });
    },

    deleteTienda: (req, res) => {
        tienda.deleteTienda(parseInt(req.params.id), (err, data) =>{
            if (data && data.message == 'Deleted'){
                res.json({
                    success: true,
                    data
                })
            }
            else if (data && data.message == 'element not exists'){
                res.status(406).json({
                    message: 'Id del elemento no existe'
                })
            } else {
                res.status(500).json({
                    message: 'error'
                })
            }
        })
    },

    updateTienda: (req, res) => {
        const newDatos = {
            id: parseInt(req.params.id),
            categoria: req.body.categoria,
            ubicacion: req.body.ubicacion,
            nombre: req.body.nombre
        }

        tienda.updateTienda(newDatos, (err, data) => {
            if(data && data.message){
                res.json(data)
            } else {
                res.status(500).json({
                    success: false,
                    message: 'Error'
                })
            }
        })
    }
}

module.exports = tiendaControllers;