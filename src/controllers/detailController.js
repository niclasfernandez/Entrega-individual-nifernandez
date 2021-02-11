const db = require('../database/models/index');

module.exports = {
    detail: function(req, res) {
        db.Notas.findByPk(req.params.id)
        .then(function(notas) {
            return res.render('detail', {
                notas: notas
            })
        })
    }
}