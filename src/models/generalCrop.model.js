import { DataTypes } from "sequelize";
import { sequelize } from "../lib/db.js";


const GeneralCrop = sequelize.define('GeneralCrop',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Nvalue:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Pvalue:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Kvalue:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

export default GeneralCrop;