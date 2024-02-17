import { Db, SortDirection } from 'mongodb';
import { client } from '../../services/mongodb';
import { Request, Response } from 'express';

let ecommerceDB: Db = client.db('e-commerce');

const filterProducts = async (req: Request, res: Response): Promise<any> => {
    try {
        const sortKey: string = req.query.sortKey as string || '_id';
        const sortOrder: SortDirection = parseInt(req.query.sortOrder as string) === -1 ? -1 : 1;

        const sortOptions: [string, SortDirection] = [sortKey, sortOrder as SortDirection];

        const productCategory: string = req.query.productCategory as string;

        const filterQuery: { [key: string]: any } = {};
        if (productCategory) {
            filterQuery['product_category'] = productCategory;
        }

        const products = await ecommerceDB.collection('Products')
            .find(filterQuery)
            .sort([sortOptions])
            .toArray();

        console.log(products);

        return res.status(200).json({ products });

    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export default filterProducts;
