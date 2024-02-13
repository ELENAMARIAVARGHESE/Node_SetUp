import { DataTypes, Sequelize} from "sequelize";
import sequelize from "../config/sequelize-config";
import EC_SUPPLIER_CUSTOMER_MAPPING from "../../types/modelTypes/ec_suppliercustomermapping";
 
EC_SUPPLIER_CUSTOMER_MAPPING.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    supplier_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    customer_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    status : {
        type : DataTypes.STRING,
        allowNull : false,
        defaultValue: 'pending',
    },
    createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
},{
    sequelize:sequelize,
    modelName : 'ec_supplier_customer_mapping',
    tableName : 'ec_supplier_customer_mapping',
});
 
export default EC_SUPPLIER_CUSTOMER_MAPPING;