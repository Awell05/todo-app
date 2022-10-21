const Sequelize = require("sequelize");
require('dotenv').config();
// the line above must be present to require .env file
// the new sequelize creates and object 
const sequelize = new Sequelize(
    // the order must be db name, db username, db password
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PW,
    {
        host: 'localhost',
        dialect: 'mysql',
        // this is the default port where mysql is
        port: 3306
    }
);

module.exports = sequelize;