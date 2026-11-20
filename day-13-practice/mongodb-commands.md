# Day 13 - MongoDB and Mongoose Commands

## 1. MongoDB Setup

Start the container:
docker start ems-mongodb-practice

Open MongoDB shell:
docker exec -it ems-mongodb-practice mongosh

Select database:
use ems_practice

## 2. MongoDB CRUD Operations

Insert one employee:
db.employees.insertOne({ employeeId: 1, name: "Amit", department: "IT", salary: 50000 })

Insert multiple employees:
db.employees.insertMany([{ employeeId: 2, name: "Priya", department: "HR", salary: 45000 }, { employeeId: 3, name: "Rahul", department: "IT", salary: 60000 }])

Find all employees:
db.employees.find()

Find IT employees:
db.employees.find({ department: "IT" })

Count employees:
db.employees.countDocuments()

Update salary:
db.employees.updateOne({ employeeId: 1 }, { $set: { salary: 55000 } })

Delete employee:
db.employees.deleteOne({ employeeId: 4 })

Sort by salary:
db.employees.find().sort({ salary: -1 })

Limit results:
db.employees.find().limit(1)

## 3. Mongoose Setup

Install:
npm install mongoose --prefix backend

Check installation:
npm list mongoose --prefix backend

Run Mongoose test:
node .\backend\testMongo.js

## 4. Mongoose CRUD Methods

Create:
EmployeeMongo.create(employeeData)

Read:
EmployeeMongo.find()

Update:
EmployeeMongo.updateOne(filter, update)

Delete:
EmployeeMongo.deleteOne(filter)

## 5. Mongoose Validation

- Required field validation
- Minimum salary validation (min: 0)
- Tested missing employee name
- Tested negative salary

Note: EmployeeMongo creates the employeemongos collection, separate from employees.

Day 13 Practical Completed.

## 6. MongoDB Aggregation

Group employees by department:
db.employees.aggregate([
    {
        $group: {
            _id: "$department",
            averageSalary: { $avg: "$salary" },
            totalEmployees: { $sum: 1 }
        }
    }
])

Sort aggregation results:
db.employees.aggregate([
    {
        $group: {
            _id: "$department",
            averageSalary: { $avg: "$salary" }
        }
    },
    { $sort: { averageSalary: -1 } }
])

## 7. MongoDB Indexes

Create an index:
db.employees.createIndex({ employeeId: 1 })

View indexes:
db.employees.getIndexes()

Check query execution:
db.employees.find({ employeeId: 1 }).explain("executionStats")

## 8. Embedding and Referencing

Insert an employee with embedded department:
db.employees.insertOne({
    employeeId: 10,
    name: "Karan",
    salary: 52000,
    department: {
        name: "IT",
        location: "Bengaluru"
    }
})

Find using embedded field:
db.employees.find({ "department.name": "IT" })

Insert a separate department:
db.departments.insertOne({
    departmentId: 1,
    name: "Finance",
    location: "Bengaluru"
})

Insert employee with department reference:
db.employees.insertOne({
    employeeId: 11,
    name: "Neha",
    salary: 48000,
    departmentId: ObjectId("REPLACE_WITH_DEPARTMENT_OBJECT_ID")
})

Join using lookup:
db.employees.aggregate([
    { $match: { employeeId: 11 } },
    {
        $lookup: {
            from: "departments",
            localField: "departmentId",
            foreignField: "_id",
            as: "departmentDetails"
        }
    }
])

## 9. Mongoose Models and Relationships

Model files:
- backend/models/EmployeeMongo.js
- backend/models/DepartmentMongo.js
- backend/models/ProjectMongo.js

Test all three models:
node .\backend\testMongoModels.js

Mongoose relationship:
- ProjectMongo references DepartmentMongo using ObjectId.
- populate("department") retrieves the related department document.
- EmployeeMongo stores department as a string in its current schema.

Day 13 advanced practicals completed.
