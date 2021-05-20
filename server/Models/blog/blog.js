const Sequelize = require('sequelize');
const db = require('../../config/connection')
const BlogModel = db.define('blog_list', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.STRING
      },
      creator : {
          type : Sequelize.STRING
      },
      comments : {
        type : Sequelize.ARRAY(Sequelize.INTEGER)
    },
      likes : {
        type : Sequelize.ARRAY(Sequelize.INTEGER)
    },
      shares : {
        type : Sequelize.ARRAY(Sequelize.INTEGER)
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
    },
  });

  module.exports = BlogModel
