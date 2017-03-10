var sq = require('./connectSequelize');

var Cliente = sq.sequelize.define('Cliente', {
    id          : { primaryKey: true, type: sq.Sequelize.INTEGER, autoIncrement: true },
    nombres     : sq.Sequelize.TEXT,
    apellidos   : sq.Sequelize.TEXT,
    cedula      : sq.Sequelize.TEXT
}, { 
    tableName: 'clientes'
});

module.exports.Cliente = Cliente;