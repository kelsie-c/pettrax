const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        photo: {
            type: DataTypes.STRING,
            // url for pet photo
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthday: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     isDate: true,
            // },
        },
        speciesType: {
            type: DataTypes.STRING,
            allowNull: false,
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
        birthmark: {
            type: DataTypes.STRING,
            // allowNull: false,
            // validate: {
            //     len: [2,100],
            // },
        },   
        petInfo: {
            type: DataTypes.STRING,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        vetName: {
            type: DataTypes.STRING,
        },
        vetAddress: {
            type: DataTypes.STRING,
        },
        vetPhone: {
            type: DataTypes.STRING,
        },
        contactName: {
            type: DataTypes.STRING,
        },
        contactPhone: {
            type: DataTypes.STRING,
        },    
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pet'
    }
);

module.exports = Pet;