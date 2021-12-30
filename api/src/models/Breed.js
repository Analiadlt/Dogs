const { DataTypes , UUID , UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('breed', {
    name: { type: DataTypes.STRING, allowNull: false,},
    weight_imperial:{ type: DataTypes.STRING, allowNull: false},
    weight_metric:{ type: DataTypes.STRING, allowNull: false},
    height_imperial:{ type: DataTypes.STRING, allowNull: false},
    height_metric:{ type: DataTypes.STRING, allowNull: false},
    life_span:{ type: DataTypes.STRING},
    createByOne: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
  },{ timestamps: false}
 );
};
