import { Db, SortDirection } from 'mongodb';
import { client } from '../../services/mongodb';
import { Request, Response } from 'express';

let ecommerceDB: Db = client.db('e-commerce');

const getProducts = async (req: Request, res: Response): Promise<any> => {
    try {
        const offset: number = parseInt(req.query.offset as string) || 0;
        const sortKey: string = req.query.sortKey as string || '_id'; 
        const sortOrder: SortDirection = parseInt(req.query.sortOrder as string) === -1 ? -1 : 1; 

        const sortOptions: [string, SortDirection] = [sortKey, sortOrder as SortDirection];

        let searchQuery = {}; 
        const searchString: string = req.query.search as string;
        if (searchString) {
           
            const regex = new RegExp(searchString, 'i');
            searchQuery = {
                $or: [
                    { product_name: { $regex: regex } },
                    { product_category: { $regex: regex } }
                ]
            };
        }

        const products = await ecommerceDB.collection('Products')
            .find(searchQuery)
            .sort([sortOptions])
            .skip(offset)
            .limit(5)
            .toArray();

        console.log(products);

        return res.status(200).json({ products });
        
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export default getProducts;
