import { Db, SortDirection } from 'mongodb';
import { client } from '../../services/mongodb';
import { Request, Response } from 'express';

let ecommerceDB: Db = client.db('e-commerce');

const filterProducts = async (req: Request, res: Response): Promise<any> => {

    const supplier_reg_id = req.query.supplier_reg_id;

    if(!supplier_reg_id){
        return res.status(422).json({error : 'supplier Registration ID required in the Request'})
    }
    try {
        const productCategory: string = req.query.productCategory as string;

        const filterQuery: { [key: string]: any } = {};
        if (productCategory) {
            filterQuery['product_category'] = productCategory;
        }

        const products = await ecommerceDB.collection('Products')
            .find(filterQuery)
            .toArray();

        console.log(products);

        return res.status(200).json({ products });

    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export default filterProducts;
