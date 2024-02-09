import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from '../config/sequelize-config'; // Import the Sequelize instance
import EC_SUPERADMIN from '../../types/modelTypes/ec_superAdmin';
import bcrypt from 'bcrypt';

EC_SUPERADMIN.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  e_mail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profile_pic: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  registration_id: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: () => {
      return Math.floor(100000 + Math.random() * 900000).toString();
    },
  },
  registration_time_stamp: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
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
  modelName: 'ec_super_admin',
  tableName: 'ec_super_admin',
  hooks:{
    beforeCreate:(user:EC_SUPERADMIN)=>{
      const hashedPassword=bcrypt.hashSync(user.password,bcrypt.genSaltSync(10));
      user.password=hashedPassword;
    }
  }
});

export default EC_SUPERADMIN ;
