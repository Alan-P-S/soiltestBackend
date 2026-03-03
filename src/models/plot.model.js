import { DataTypes } from "sequelize";
import { sequelize } from "../lib/db.js";

const Plot = sequelize.define('Plot',{
    size:{
        type:DataTypes.STRING,
        allowNull:false
    },
    soilType:{
        type:DataTypes.STRING,
        allowNull:false
    },
    longitude:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    latitude:{
        type:DataTypes.STRING,
        allowNull:false,
    },
})


export default Plot;