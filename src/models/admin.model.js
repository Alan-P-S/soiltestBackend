import { DataTypes } from "sequelize";
import { sequelize } from "../lib/db.js";



const Admin =sequelize.define('Admin',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
})


export default Admin;