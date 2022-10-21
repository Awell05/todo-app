DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;

CREATE TABLE user (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    validate{

    },

    password VARCHAR NOT NULL MINIMUM LENGTH 8
);

CREATE TABLE task (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    user_id INT, FOREIGN_KEY USER(id)
)