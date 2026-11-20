# Day 10 - Express CRUD APIs and Backend Structure

## 1. What I learned

Day 10 focused on building and understanding REST APIs using Express.js.

Topics covered:
- Express routes and HTTP methods
- Controllers and request/response handling
- GET, POST, PUT and DELETE
- Route parameters, query parameters and request body
- Validation and error handling
- Authentication using JWT
- Middleware and role-based access
- MySQL queries, JOINs and transactions
- Searching and filtering employees

## 2. Backend folder structure

Inside the backend folder:

- routes - defines API endpoints
- controllers - handles incoming requests and responses
- services - contains business logic
- models - handles data-related operations
- middleware - performs checks before requests reach controllers
- config - application and database configuration
- utils - reusable helper functions

## 3. Employee API endpoints

Base URL: http://localhost:5000/api/employees

| Method | Endpoint | Purpose |
|---|---|---|
| GET | /api/employees | Get all employees |
| GET | /api/employees/:id | Get one employee |
| POST | /api/employees | Add an employee |
| PUT | /api/employees/:id | Update an employee |
| DELETE | /api/employees/:id | Delete an employee |

The employee routes are mounted in backend/server.js.

## 4. Request data

- req.params - values passed in the URL, such as employee ID.
- req.query - values passed after ? in the URL, such as search and filters.
- req.body - data sent in the request body, commonly in POST and PUT.

Examples:

GET /api/employees/1

GET /api/employees?search=Rahul

POST /api/employees with employee details in the JSON body.

## 5. Practical work completed

### GET all employees

Invoke-RestMethod -Uri "http://localhost:5000/api/employees" -Method GET

### Search employees

Invoke-RestMethod -Uri "http://localhost:5000/api/employees?search=Rahul" -Method GET

### Filter by department

Invoke-RestMethod -Uri "http://localhost:5000/api/employees?department_id=1" -Method GET

### Filter by availability

Invoke-RestMethod -Uri "http://localhost:5000/api/employees?availability=AVAILABLE" -Method GET

### Combine filters

Invoke-RestMethod -Uri "http://localhost:5000/api/employees?department_id=1&availability=ASSIGNED" -Method GET

### Get employee by ID

Invoke-RestMethod -Uri "http://localhost:5000/api/employees/1" -Method GET

We also tested a missing employee ID and received a 404 response.

## 6. CRUD operations tested

- CREATE: Added a temporary employee using POST.
- READ: Retrieved the employee using GET.
- UPDATE: Changed the designation using PUT.
- DELETE: Deleted the temporary employee using DELETE.
- Verified that the deleted employee returned a 404 response.

The temporary employee was deleted successfully.

## 7. Authentication and authorization

Login endpoint:

POST /api/auth/login

The login controller:
- Checks the user's credentials.
- Uses bcrypt.compare() to verify the password.
- Uses jwt.sign() to generate a JWT.
- Returns the token and user details.

Protected employee routes use:
- verifyToken - checks whether the JWT is valid.
- requireRoles("ADMIN", "HR") - checks whether the user's role is permitted.

Never save passwords or actual JWT tokens in practice files.

## 8. Validation and database safety

The employee creation controller checks required fields:
- employee_id
- full_name
- email
- department_id

We tested an invalid request without an email and received a 400 response.

Other concepts identified in the controller:
- Parameterized SQL queries help prevent SQL injection.
- Duplicate employee ID and email checks prevent duplicate records.
- Database transactions use beginTransaction(), commit() and rollback().
- LEFT JOIN retrieves related department information.

## 9. Important HTTP status codes

| Code | Meaning |
|---|---|
| 200 | OK - request successful |
| 201 | Created - new record created |
| 400 | Bad Request - invalid or missing input |
| 401 | Unauthorized - authentication required or invalid |
| 403 | Forbidden - insufficient permissions |
| 404 | Not Found - requested resource does not exist |
| 409 | Conflict - resource conflicts with existing data |
| 500 | Internal Server Error |

## 10. Trainer revision questions

1. What is Express.js?
2. What is the difference between GET and POST?
3. What is the difference between PUT and PATCH?
4. What are CRUD operations?
5. What is the difference between req.params, req.query and req.body?
6. What is middleware?
7. What is JWT authentication?
8. What is role-based authorization?
9. Why do we validate request data?
10. Why do we use parameterized SQL queries?
11. What is the purpose of a database transaction?
12. What is the difference between HTTP 401 and 403?
13. What is the purpose of a controller?
14. Why do we use separate route and controller files?

## 11. Day 10 progress

Completed:
- Inspected backend project structure.
- Read employee routes and controller.
- Understood GET all and GET by ID.
- Tested search and filters.
- Tested missing employee ID.
- Inspected authentication routes and login logic.
- Logged in and obtained a JWT locally.
- Created an employee using POST.
- Updated the employee using PUT.
- Deleted the employee using DELETE.
- Tested required-field validation.

Still to practise:
- Duplicate email validation.
- Pagination support and whether the current API implements it.
- Postman testing.
- Centralized 404 and error handling review.

