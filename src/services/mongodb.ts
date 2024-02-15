import {MongoClient, ServerApiVersion, Db} from 'mongodb';
import config from '../config/mongodb-config';

const client = new MongoClient(config);

const connectToMongoDB = async()=>{
    try{
        await client.connect();
        const db:Db=client.db("e-commerce");
        await db.command({ping:1})
        console.log("pinged your deployment. You successfully connected to MongoDB")

    }
    catch(error){
        console.log(error);

    }
    
}
const closeMongoDBConnection = async()=>{
    try{
        await client.close();
        console.log("Succesfully closed connection");
   

    }
    catch(error){
        console.log(error);

    }
    
}
export {connectToMongoDB,closeMongoDBConnection,client}