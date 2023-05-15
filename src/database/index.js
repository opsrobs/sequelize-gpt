const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const UserStories = require('../models/UserStorie');


const connection = new Sequelize(dbConfig);

UserStories.init(connection)

module.exports = connection;