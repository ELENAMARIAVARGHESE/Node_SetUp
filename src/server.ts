import express,{Express, NextFunction, Request, Response } from 'express';
const app:Express = express();
import sequelize from './config/sequelize-config';
// import { Op } from 'sequelize';
// import EC_SUPPLIERS from './models/ec_suppliers';
import indexRoutes from '../../Node_SetUp/src/routes/index'
import supplierRoutes from '../../Node_SetUp/src/routes/supplierRoutes'
sequelize.sync ({force:false})
.then(()=>{
    console.log('Database synced')
})
.catch((error:any)=>{
    console.error('Error syncing database :',error);
})

const PORT = 3000 || process.env.PORT;
app.use(express.json());
app.use(indexRoutes);
app.use('/api/v1',supplierRoutes);

const middleware=(req:Request,res:Response,next:NextFunction)=>{
    

}



app.listen(PORT, () => console.log(`listening to port ${PORT}...`));