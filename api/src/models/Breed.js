const { DataTypes , UUID , UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('breed', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true},
    name: { type: DataTypes.STRING, allowNull: false,},
    height:{ type: DataTypes.INTEGER, allowNull: false},
    weight:{ type: DataTypes.INTEGER, allowNull: false},
    yearsLife:{ type: DataTypes.INTEGER},
  },{ updatedAt: false}
 );
};
