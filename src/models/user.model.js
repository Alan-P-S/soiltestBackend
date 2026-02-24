import { DataTypes } from "sequelize";
import {sequelize} from "../lib/db.js";
const User = sequelize.define('User',{
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    place:{
        type:DataTypes.STRING,
        allowNull:false
    },
    landArea:{
        type:DataTypes.STRING,
        allowNull:false
    }
    },
);


export default User;