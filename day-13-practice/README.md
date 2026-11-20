# Day 13 - MongoDB and Mongoose Commands

## 1. Start MongoDB

```powershell
docker start ems-mongodb-practice
```

## 2. Open MongoDB Shell

```powershell
docker exec -it ems-mongodb-practice mongosh
```

## 3. Select Database

```javascript
use ems_practice
```

## 4. MongoDB CRUD Operations

### Insert One

```javascript
db.employees.insertOne({
  employeeId: 1,
  name: "Amit",
  department: "IT",
  salary: 50000
})
```

### Insert Multiple

```javascript
db.employees.insertMany([
  { employeeId: 2, name: "Priya", department: "HR", salary: 45000 },
  { employeeId: 3, name: "Rahul", department: "IT", salary: 60000 }
])
```

### Find All

```javascript
db.employees.find()
```

### Find by Department

```javascript
db.employees.find({ department: "IT" })
```

### Projection

```javascript
db.employees.find(
  { department: "IT" },
  { _id: 0, name: 1, salary: 1 }
)
```

### Count Documents

```javascript
db.employees.countDocuments()
```

### Update

```javascript
db.employees.updateOne(
  { employeeId: 1 },
  { $set: { salary: 55000 } }
)
```

### Delete

```javascript
db.employees.deleteOne({ employeeId: 4 })
```

### Sort by Salary

```javascript
db.employees.find().sort({ salary: -1 })
```

### Limit Results

```javascript
db.employees.find().limit(1)
```

## 5. Mongoose Setup

### Install Mongoose

```powershell
npm install mongoose --prefix backend
```

### Check Installation

```powershell
npm list mongoose --prefix backend
```

### Run Mongoose Test

```powershell
node .\backend\testMongo.js
```

## 6. Mongoose CRUD Methods

```javascript
EmployeeMongo.create(employeeData);
EmployeeMongo.find();
EmployeeMongo.updateOne(filter, update);
EmployeeMongo.deleteOne(filter);
```

## 7. Check Collections

```powershell
docker exec -it ems-mongodb-practice mongosh ems_practice --eval "show collections"
```

Note: The EmployeeMongo model creates the employeemongos collection. The employees collection is separate.

## 8. Validation Practised

- Required field validation