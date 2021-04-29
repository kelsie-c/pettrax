const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ICE extends Model {}

ICE.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        groupID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        contactName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contactPhone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ice'
    }
);

module.exports = ICE;