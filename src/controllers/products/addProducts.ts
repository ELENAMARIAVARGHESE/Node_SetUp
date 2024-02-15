import {MongoClient, ServerApiVersion, Db} from 'mongodb';
import { client } from '../../services/mongodb';
import {Request,Response} from 'express';


let ecommerceDB:Db=client.db('e-commerce');
const addProducts =async(req:Request,res:Response):Promise<any>=>{
    try{
        const products:{product_name:string,product_stock:number,product_category:string,product_price:number,supplier_id:number,[key:string]:string|number}[]=req.body
    //const {product_name,product_stock,product_category,product_price,supplier_id,...otherData}=req.body;
    // if(!product_name || !product_stock ||!product_category ||!product_price||!supplier_id){
    //     return res.status(422).json({error:"Insufficient data"})

    // }
   // ecommerceDB.collection('Products').insertOne({product_name,product_stock,product_category,product_price,supplier_id});
       ecommerceDB.collection('Products').insertMany(products);

    return res.status(422).json({message:"Data added successfully"})
    }
    catch(error){
        return res.status(422).json({ error: "Internal Server Error" });
    }


}
export default addProducts;
