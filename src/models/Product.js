const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    product: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    img: {
        type: DataTypes.STRING(1000),  
        allowNull: true
    },
    description: {
        type: DataTypes.STRING(1000),
        allowNull: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  },{ timestamps: false });
};