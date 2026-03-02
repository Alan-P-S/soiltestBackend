import { DataTypes } from "sequelize";
import { sequelize } from "../lib/db.js";


const Event = sequelize.define('Event',{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    topic:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Description:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Image:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    date:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    time:{
        type:DataTypes.STRING,
        allowNull:false,
    }
});


export default Event;