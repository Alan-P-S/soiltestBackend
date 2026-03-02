import { DataTypes } from "sequelize";
import { sequelize } from "../lib/db.js";

const Plot = sequelize.define('Plot',{
    location:{
        type:DataTypes.STRING,
        allowNull:false
    },
    size:{
        type:DataTypes.STRING,
        allowNull:false
    },
    soilType:{
        type:DataTypes.STRING,
        allowNull:false
    }
})


export default Plot;