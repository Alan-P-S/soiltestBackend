import { DataTypes } from "sequelize";
import { sequelize } from "../lib/db.js";


const BookTest = sequelize.define('BookTest',{
    dateAndTime:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    paymentMethod:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    }
})


export default BookTest;