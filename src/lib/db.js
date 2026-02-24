import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize('bzkd1sqpm1dxwpmqz4jw','uba35zmofo1pfxkc','bcGMzeIOLfNErJYDDd8F',{host:'bzkd1sqpm1dxwpmqz4jw-mysql.services.clever-cloud.com',dialect:'mysql'});


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





