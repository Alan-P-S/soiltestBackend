import { sequelize } from "../lib/db.js";
import { DataTypes } from "sequelize";

const Report = sequelize.define('Report',{
    ph:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    tss:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    organicCarbon:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    phosphorus:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    potassium:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    soilType:{
        type:DataTypes.STRING,
        allowNull:false,
    },
})

export default Report;