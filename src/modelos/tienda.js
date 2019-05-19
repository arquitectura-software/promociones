
const mysql = require('mysql');

connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'Promociones'
});

let modeloTienda = {};

modeloTienda.getTiendas = (callback) => {
    if (connection){
        connection.query('SELECT * from Tienda ORDER BY nombre',
            (err, rows) => {
                if (err){
                    throw err
                }else{
                    callback(null, rows);
                }
            }
        );
    }
}

modeloTienda.insertarTienda = (datosTienda, callback) => {
    if (connection) {
        connection.query('INSERT INTO Tienda SET ?', datosTienda,
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, result)
                }
            }
        );
    }
}

module.exports = modeloTienda;