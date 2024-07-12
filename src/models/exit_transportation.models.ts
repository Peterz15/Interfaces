import { DataType, DataTypes } from "sequelize";

const exit_trasnportation ={
    id_exit:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    decription:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    origin:{
        type: DataTypes.STRING(50),
        allowNull:false,
    },
    destination:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    desparture_date:{
        type:DataTypes.DATE,
        allownull: false,
    },
    id_transportation:{
        type: DataTypes.INTEGER,
    },
    id_responsible:{
        type: DataTypes.INTEGER,
    },
    idboleto:{
        type : DataTypes.INTEGER,
    }
};
export {exit_trasnportation};