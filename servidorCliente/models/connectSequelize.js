var Sequelize = require('sequelize');

var sequelize = new Sequelize('clientesdb', 'postgres', 'sysware',
    {
        dialect:'postgres', host: 'localhost', port:'5432', 
        define:{ timestamps:false, freezeTableName:true }
    }
);
sequelize.authenticate().then(function(){ console.log('BASE ABIERTA'); });

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;