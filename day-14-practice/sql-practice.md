# Day 14 - SQL Practical Commands

## 1. Database exploration

SHOW DATABASES;
USE company;
SHOW TABLES;
DESCRIBE employee;
SELECT * FROM employee;

## 2. Filtering and sorting

SELECT * FROM employee WHERE department = 'IT';

SELECT * FROM employee ORDER BY salary DESC;

SELECT * FROM employee WHERE name LIKE 'P%';

## 3. Aggregate functions

SELECT AVG(salary) AS average_salary FROM employee;

SELECT department, COUNT(*) AS total_employees
FROM employee
GROUP BY department;

## 4. Update records

UPDATE employee
SET salary = 48000
WHERE id = 3;

SELECT * FROM employee WHERE id = 3;

## 5. Create department table

CREATE TABLE department (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100),
    location VARCHAR(100)
);

INSERT INTO department (department_name, location)
VALUES
('IT', 'Bengaluru'),
('HR', 'Mumbai'),
('Sales', 'Delhi');

## 6. Joins

INNER JOIN:
SELECT e.name, e.salary, e.department, d.location
FROM employee e
INNER JOIN department d
ON e.department = d.department_name;

LEFT JOIN:
SELECT e.name, e.department, d.location
FROM employee e
LEFT JOIN department d
ON e.department = d.department_name;

## 7. Subquery

SELECT * FROM employee
WHERE salary > (SELECT AVG(salary) FROM employee);

## 8. Indexes

CREATE INDEX idx_employee_email ON employee(email);

SHOW INDEX FROM employee;

## 9. Transactions

START TRANSACTION;

UPDATE employee
SET salary = 65000
WHERE id = 1;

ROLLBACK;

-- COMMIT permanently saves transaction changes.
-- ROLLBACK cancels transaction changes.

## 10. Practical results

- Explored company database and employee table.
- Retrieved and filtered employee records.
- Practised sorting and aggregate functions.
- Updated Rahul's salary to 48000.
- Created department table and inserted 3 records.
- Practised INNER JOIN and LEFT JOIN.
- Practised subqueries and indexes.
- Tested START TRANSACTION and ROLLBACK.
- Verified John's original salary remained 50000.

Day 14 SQL practical completed.

## Remaining practicals

- Redis: Pending — setup requires available disk space.
- PostgreSQL: Pending — setup requires available disk space.

