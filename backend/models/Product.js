const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('SmartHomes', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

const Product = sequelize.define('Product', {
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    discount: { type: DataTypes.BOOLEAN },
    rebate: { type: DataTypes.BOOLEAN }
});

module.exports = Product;
