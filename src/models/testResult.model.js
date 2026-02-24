import { DataTypes } from "sequelize";
import { sequelize } from "../lib/db.js";

const TestResult = sequelize.define('TestResult',{
    Nvalue:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    Pvalue:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    Kvalue:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    Phvalue:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    Tssvalue:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    ClassValue:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"pending"
    },
})

export default TestResult;