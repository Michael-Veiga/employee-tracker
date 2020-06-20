USE employees_db;

INSERT INTO department (name)
VALUES ("Engineering"), ("Management"), ("Sales"); 

INSERT INTO roles (title, salary, department_id)
VALUES ("Engineer", 150000, 1), ("Manager", 200000, 2)

INSERT INTO employee (first_name, last_name, role_id)
Values ('John', 'Doe', 1), ('James', 'Franco', 2);

