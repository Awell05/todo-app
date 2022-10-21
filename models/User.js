const {Model, DataTypes } = require('sequelize');
// used to now which one database to connect to
const sequelize = require('../config/connection');


class User extends Model {}

// accepts two parameters which are objects
User.init(
    // this where you define your columns
    {
    id: {
        // datatypes. comes from sequelize library
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8],
        },
    },
    },
{
    // this is where we tell to connect table to which database
    sequelize,
    timestamps: true,
    // useful if you want to use table as singular noun. sequelize will lowercase and then make table name plural. if you don't want this done, the you tell sequelize to freeze name
    freezeTableName: true,
    underscored: true, //snake casing
    modelName: "user",
}
);

module.exports = User;