const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize-config'); // Import the Sequelize instance


const ec_suppliers = sequelize.define('ec_suppliers', {
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
  e_mail:{
    type:DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
   
  },
  profile_pic:{
    type:DataTypes.STRING, 
    allowNull: true,
  },
  registration_id:{
    type:DataTypes.STRING,
    allowNull: false,
  },
  registration_time_stamp:{
    type:DataTypes.DATE,
    allowNull: false,
  }
 
});

module.exports = ec_suppliers ;
