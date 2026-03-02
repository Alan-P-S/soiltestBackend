import { sequelize } from "../lib/db.js";
import { DataTypes } from "sequelize";

const Report = sequelize.define('Report',{
    ph:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    organicCarbon:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    nitrogen:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    phosphorous:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    pottasium:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
})

export default Report;