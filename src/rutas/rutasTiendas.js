const tienda = require('../modelos/tienda')


module.exports = (app) => {
    app.get('/tiendas', (req, res) => {
        tienda.getTiendas((err, data) =>{
                res.status(200).json(data);
            }
        );
    });
}
