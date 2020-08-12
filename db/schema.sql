-- ### Schema

CREATE DATABASE meals_db;
USE meals_db;

CREATE TABLE meals (
    id int NOT NULL AUTO_INCREMENT,
    meal_name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
