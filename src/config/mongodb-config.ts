import {config} from 'dotenv';
config({path:".env"})
const MongoURI =process.env.MONGO_CONNECTION_STRING??"";
export default MongoURI;