const Sequelize = require('sequelize');
const db = require('../../config/connection')
const UserModel = db.define('user', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING
      },
      email : {
          type : Sequelize.STRING
      },
      password : {
        type : Sequelize.STRING
    },
      confirmpassword   : {
        type : Sequelize.STRING
    },
    created_at : {
        type : Sequelize.DATE
    },
    updated_at : {
        type : Sequelize.DATE
    },
    created_by : {
        type : Sequelize.STRING
    },
    updated_by : {
        type : Sequelize.STRING
    }
  });

module.exports = UserModel




