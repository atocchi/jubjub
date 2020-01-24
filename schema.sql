DROP DATABASE IF EXISTS image_db;

CREATE DATABASE image_db;

USE image_db;

CREATE TABLE files (
id INT NOT NULL AUTO_INCREMENT,
image varchar(100) NOT NULL,
user varchar(60) NOT NULL, 
PRIMARY KEY (id)
);

SELECT * FROM files ORDER BY id DESC;