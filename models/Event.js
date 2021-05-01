const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Pet = require('./Pet');

class Event extends Model {}

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        petId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: Pet,
            //     key: id,
            // },
        },
        eventType: {
            type: DataTypes.STRING,
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'event'
    }
);

module.exports = Event;