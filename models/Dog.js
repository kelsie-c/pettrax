const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dog extends Model {}

Dog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthday: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true,
            },
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weight: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        uniqueMarker: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2,100],
            },
        },
        ownerID: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
        },
        groupID: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'dog'
    }
);

module.exports = Dog;