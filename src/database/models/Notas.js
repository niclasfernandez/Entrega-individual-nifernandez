module.exports = function(sequelize, dataTypes) {
    let alias = "Notas";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: dataTypes.STRING,
            default: null
        },
        texto: {
            type: dataTypes.TEXT,
            default: null
        },
        created_at: {
            type: dataTypes.DATE,
            default: null
        },
        updated_at: {
            type: dataTypes.DATE,
            default: null
        },
        deleted_at: {
            type: dataTypes.DATE,
            default: null
        }
    }
    
    let config = {
        tableName: 'notas',
        timestamps: true,
        underscored: true,
        paranoid: true       
    }

    const Movie = sequelize.define(alias, cols, config)
    return Movie
}