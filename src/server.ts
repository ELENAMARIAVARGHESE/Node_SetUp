import express,{Express, NextFunction, Request, Response } from 'express';
const app:Express = express();
import sequelize from './config/sequelize-config';
// import { Op } from 'sequelize';
// import EC_SUPPLIERS from './models/ec_suppliers';
import indexRoutes from '../../Node_SetUp/src/routes/index'
import supplierRoutes from '../../Node_SetUp/src/routes/supplierRoutes'

sequelize.sync ({force:true})
.then(()=>{
    console.log('Database synced')
})
.catch((error:any)=>{
    console.error('Error syncing database :',error);
})


const PORT = 3000 || process.env.PORT;

app.use(express.json());
// app.use((req,res,next)=>middleware(req,res,next));
app.use('/api/v1',indexRoutes);
app.use('/api/v2',supplierRoutes);






app.listen(PORT, () => console.log(`listening to port ${PORT}...`));
