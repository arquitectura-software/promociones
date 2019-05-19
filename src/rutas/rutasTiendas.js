const tienda = require('../modelos/tienda')


module.exports = (app) => {
    
    app.get('/tiendas', (req, res) => {
        tienda.getTiendas((err, data) =>{
                res.status(200).json(data);
            }
        );
    });

    app.post('/tiendas', (req, res) => {
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
    });
}
