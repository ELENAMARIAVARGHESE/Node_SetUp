import express,{Express, NextFunction, Request, Response } from 'express';
const app:Express = express();
import sequelize from './config/sequelize-config';
// import { Op } from 'sequelize';
// import EC_SUPPLIERS from './models/ec_suppliers';
import indexRoutes from '../../Node_SetUp/src/routes/index'
import supplierRoutes from '../../Node_SetUp/src/routes/supplierRoutes'
const X_API_KEY = 'elenaMariaVarghese';
sequelize.sync ({force:false})
.then(()=>{
    console.log('Database synced')
})
.catch((error:any)=>{
    console.error('Error syncing database :',error);
})
const middleware=(req:Request,res:Response,next:NextFunction)=>{
    const apiKey = req.headers['x-api-key'];
    res.setHeader("Set-Cookie",["name=elena","subject=node"]);
    if (apiKey && apiKey === X_API_KEY) {
        next();
      } else {
        return res.status(403).json({ error: 'No access' });
      }
}

const PORT = 3000 || process.env.PORT;

app.use(express.json());
// app.use((req,res,next)=>middleware(req,res,next));
app.use('/api/v1',middleware,indexRoutes);
app.use('/api/v2',supplierRoutes);






app.listen(PORT, () => console.log(`listening to port ${PORT}...`));