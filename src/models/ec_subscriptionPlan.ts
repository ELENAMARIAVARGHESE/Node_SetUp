import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config';
import EC_SUBSCRIPTION_PLAN from '../../types/modelTypes/ec_subscrptionPlan';

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
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  no_of_customers: {
    type: DataTypes.INTEGER,
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

});

export default EC_SUBSCRIPTION_PLAN ;
