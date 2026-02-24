import { DataTypes } from "sequelize";
import { sequelize } from "../lib/db.js";

const Test = sequelize.define('Test',{
    status:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"pending"
    },
})

export default Test;