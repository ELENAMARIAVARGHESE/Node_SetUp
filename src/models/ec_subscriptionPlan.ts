import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config'; // Import the Sequelize instance
import EC_SUBSCRIPTION_PLAN from '../../types/modelTypes/ec_suppliers';
import bcrypt from 'bcrypt';

EC_SUBSCRIPTION_PLAN.init({
  plan_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  subscription_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subscription_fee: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  no_of_customers: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
}, {
  sequelize,
  modelName: 'ec_subscription_plans',
  tableName: 'ec_subscription_plans',
  hooks:{
    beforeCreate:(user:EC_SUBSCRIPTION_PLAN)=>{
      const hashedPassword=bcrypt.hashSync(user.password,bcrypt.genSaltSync(10));
      user.password=hashedPassword;
    }
  }
});

export default EC_SUBSCRIPTION_PLAN ;
