import {Model} from 'sequelize';
 
class EC_SUPPLIER_CUSTOMER_MAPPING extends Model {
    public supplier_id ?: number;
    public customer_id ?: number;
    public createdAt ?: Date;
    public updatedAt ?: Date;
}
 
export default EC_SUPPLIER_CUSTOMER_MAPPING;