const {Model, DataTypes } = require('sequelize');
// used to now which one database to connect to
const sequelize = require('../config/connection');


class Task extends Model {}

// accepts two parameters which are objects
Task.init(
    // this where you define your columns
    {
    id: {
        // datatypes. comes from sequelize library
        type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
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
    modelName: "task",
}
);

module.exports = Task;