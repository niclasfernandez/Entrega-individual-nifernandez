const db = require('../database/models/index');

module.exports = {
    home: function(req, res) {
        db.Notas.findAll()
        .then(function(notas) {
            return res.render('index', {
                notas: notas
            })
        })
    },
    create: function(req, res) {
        db.Notas.create({ titulo: req.body.titulo, texto: req.body.texto })
        .then(function(notas){
            res.redirect('/')
        })
    }
}