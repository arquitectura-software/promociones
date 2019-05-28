
CREATE DATABASE IF NOT EXISTS Promociones;
use Promociones;


/* Tabla de las tiendas que tendran las promociones.*/
CREATE TABLE IF NOT EXISTS Tienda (
    
    id_tienda INT(10) unsigned NOT NULL AUTO_INCREMENT,
    categoria VARCHAR(150) COLLATE utf8_unicode_ci NOT NULL,
    ubicacion VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
    nombre VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
    PRIMARY KEY(id_tienda),
    CONSTRAINT tienda_nombre_unique UNIQUE (nombre),
    INDEX(id_tienda)
) ENGINE=InnoDB DEFAULT CHARACTER SET = utf8;

DESCRIBE Tienda;

/* Tabla de las promociones que se ofertaran*/
CREATE TABLE IF NOT EXISTS Promocion (
    
    id_promocion INT(10) unsigned NOT NULL AUTO_INCREMENT,
    id_tienda INT(10) unsigned NOT NULL,
    descripcion VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
    fecha_inicio DATETIME NOT NULL,
    fecha_fin DATETIME NOT NULL,
    PRIMARY KEY(id_promocion),
    FOREIGN KEY(id_tienda)
        REFERENCES Tienda(id_tienda)
        ON DELETE CASCADE
        ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARACTER SET = utf8;

DESCRIBE Promocion;

ALTER USER 'mysql'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
FLUSH PRIVILEGES;