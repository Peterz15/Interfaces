import { DataType, DataTypes } from "sequelize";

const responsible={
    id_responsible:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    phone:{
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    hours:{
        type: DataTypes.TIME,
        allowNull: false,
    }
};
export {responsible};