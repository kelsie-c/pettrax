const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vet extends Model {}

Vet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        petID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        vetName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vetAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vetPhone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vet'
    }
);

module.exports = Vet;