const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Group extends Model {}

Group.init(
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
            //     model: 'pet',
            //     key: 'id',
            // },
        },
        userId: {
            type: DataTypes.INTEGER,
            //DataTypes.ARRAY(DataTypes.INTEGER)
            allowNull: false,
        },
        isAdmin: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'group',
    }
);

module.exports = Group;