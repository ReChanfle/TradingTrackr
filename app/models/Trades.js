const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('trades',{
        symbol:{
            type: DataTypes.STRING,
            allowNull: false
        },
        type:{
            type: DataTypes.ENUM('spot', 'short', 'long'),
            allowNull: false
        },
        capital:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        money_income:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        money_out:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        total_money:{
            type: DataTypes.FLOAT,
            allowNull: false
        }

    });
};