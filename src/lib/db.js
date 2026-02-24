import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(process.env.DB,process.env.USER,process.env.PASSWORD,{host:process.env.HOST,dialect:'mysql'});

export const connectDB = async ()=>{
    try{
        await sequelize.authenticate();
        console.log('Database connected successfully');
    }catch(err){
        console.log('Database connection Error',err);
    }
}

export const syncDatabase = async()=>{
    try{
        await sequelize.sync({alter:true});
        console.log('Database and tables created');
    }catch(error){
        console.log('Error in syncing',error);
    }
}





