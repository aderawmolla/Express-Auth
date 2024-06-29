const Sequelize = require('sequelize');
const sequelize = require('../config/config');
const User = require('./user.model')();

const Post = sequelize.define('Post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
});


// Define association with proper foreign key and onDelete: 'CASCADE'
Post.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

module.exports = Post;
