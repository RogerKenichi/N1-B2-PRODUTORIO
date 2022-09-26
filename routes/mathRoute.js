const express = require('express');

const routes = express.Router();

const mathController = require('../controllers/mathController');

routes.get('/iterativo',(req,res)=>{
    try{
        val = mathController.calculaIterativo(Number(req.query.m),Number(req.query.n))
        res.send({"valor":val}).status(200);
    }
    catch(err){
        res.send({"status":err})
    }

});


routes.get('/recursivo',(req,res)=>{
    try{
        val = mathController.calculaRecursivo(Number(req.query.m),Number(req.query.n),Number(req.query.m));
        res.send({"valor":val}).status(200);
    }
    catch(err){
        res.send({"status":err})
    }
});

module.exports = routes;