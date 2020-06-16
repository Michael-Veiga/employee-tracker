DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- create a departments table 
CREATE TABLE department
(
    id INT AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
);
-- create a roles table
CREATE TABLE roles
(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL (9,2),
-- create unique identifier for other tables to use
    department_id INT,
    PRIMARY KEY(id),
-- use foreign keys to link tables together
    FOREIGN KEY (department_id) REFERENCES department(id)

); 

-- create a employees table
CREATE TABLE employee
(
    id INT AUTO_INREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    -- create unique id for employee role
    roles_id INT NULL,
    -- create unique id for employees manager / can be null
    manager_id INT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (roles_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
); 