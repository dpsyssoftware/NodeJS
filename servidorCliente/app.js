var app     = require('./server/server');
var models  = require('./models/modelos');
app.app.listen(3000);

app.app.get('/clientes', function(req, res){
    models.Cliente.findAll().then(function(clientes){
        res.send(clientes);
    }).error(function(error){
        res.status(res.statusCode).send(JSON.stringify({message: error})); 
    });
});

app.app.post('/clientes', function(req, res){
    var nombres     = req.body.nombres;
    var apellidos   = req.body.apellidos;
    var cedula      = req.body.cedula;

    models.Cliente.create({
        nombres     : nombres,
        apellidos   : apellidos,
        cedula      : cedula
    }).then(function(){
        res.status(res.statusCode).send(JSON.stringify({message: "creado con exito"})); 
    }).error(function(error){
        res.status(res.statusCode).send(JSON.stringify({message: error})); 
    });
});

app.app.get('/clientes/:clienteId([0-9]+)', function(req, res){
    var clienteId = req.params.clienteId;
    models.Cliente.find({
        where : { id : clienteId }
    }).then(function(clientes){
        res.send(clientes);
    }).error(function(error){
        res.status(res.statusCode).send(JSON.stringify({message: error})); 
    });
});

app.app.put('/clientes/:clienteId([0-9]+)', function(req, res){
    var clienteId = req.params.clienteId;
    var nombres     = req.body.nombres;
    var apellidos   = req.body.apellidos;
    var cedula      = req.body.cedula;

    models.Cliente.findById(clienteId).then(function(cliente){
        cliente.id          = clienteId;
        cliente.nombres     = nombres;
        cliente.apellidos   = apellidos;
        cliente.cedula      = cedula;

        cliente.save().then(function(){
            res.status(res.statusCode).send(JSON.stringify({message: "actualizado con exito"})); 
        }).error(function(error){
            res.status(res.statusCode).send(JSON.stringify({message: error})); 
        });

    });
});

app.app.delete('/clientes/:clienteId([0-9]+)', function(req, res){
    var clienteId = req.params.clienteId;
    models.Cliente.destroy({
        where : { id : clienteId }
    }).then(function(){
        res.status(res.statusCode).send(JSON.stringify({message: "eliminado con exito"})); 
    }).error(function(error){
        res.status(res.statusCode).send(JSON.stringify({message: error})); 
    });
});