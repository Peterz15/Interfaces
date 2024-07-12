import { DataType, DataTypes } from "sequelize";

const transportation ={
    id_transportation:{
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true,
    },
    type_transportation:{
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      capacity:{
        type: DataTypes.INTEGER,
        allownull: false,
      },
      id_metodo:{
        type: DataTypes.INTEGER,
      }
};
export {transportation};