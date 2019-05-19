
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
        connection.query('SELECT * FROM Tienda ORDER BY nombre',
            (err, rows) => {
                if (err){
                    throw err
                } else {
                    callback(null, rows);
                }
            }
        );
    }
}

modeloTienda.getTienda = (id, callback) => {
    if (connection){
        connection.query('SELECT * FROM Tienda WHERE id_tienda = ?', id, 
        (err, row) => {
            if (err){
                throw err
            } else {
                callback(null, row);
            }
        })
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

modeloTienda.deleteTienda = (id, callback) => {
    if (connection){
        let consulta = 'SELECT * FROM Tienda WHERE id_tienda = ?';
        connection.query(consulta, id, 
            (err, row) => {
                if (row){
                    let sql = 'DELETE FROM Tienda where id_tienda = ?';
                    connection.query(sql, id, 
                    (err, result) => {
                        if (err){
                            throw err
                        }else {
                            callback(null, {
                                "message": "Deleted"
                            })
                        }
                    })
                } else {
                    callback(null, {
                        'message': "element not exists"
                    })
                }
            }
        );
    }
}

modeloTienda.updateTienda = (datosTienda, callback) => {
    if (connection) {
        const sql = "UPDATE Tienda SET categoria = ?, ubicacion = ?, nombre = ? WHERE id_tienda = ?";
        var data = [datosTienda.categoria, datosTienda.ubicacion, datosTienda.nombre, datosTienda.id]

        connection.query(sql, data, (err, result) => {
            if (err){
                throw err;
            } else {
                callback(null, {message: 'success', result});
            }
        })
    }
}

module.exports = modeloTienda;