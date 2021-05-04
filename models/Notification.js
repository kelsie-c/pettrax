const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Notification extends Model {}

Notification.init(
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
            // references: {
            //     model: 'pet',
            //     key: 'id',
            // },
        },
        bathroomRemind: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        bathroomTime: {
            type: DataTypes.STRING,
        },
        foodRemind: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        foodTime: {
            type: DataTypes.STRING,
        },
        // find a way to store hour & minute for bathroomTime & foodTime
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'notification'
    }
);

module.exports = Notification;