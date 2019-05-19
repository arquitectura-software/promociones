
var controller = require('../controladores/tiendaController')

module.exports = (app) => {

    app.route('/tiendas')
        .get(controller.getTiendas);

    app.route('/tiendas')
        .post(controller.addTienda);
    
    app.route('/tiendas/:id')
        .delete(controller.deleteTienda);
}
