const employees = [
    { id: 1, name: "Amit", department: "IT", salary: 50000 },
    { id: 2, name: "Priya", department: "HR", salary: 40000 },
    { id: 3, name: "Rahul", department: "IT", salary: 60000 }
];

// 1. Variables
const company = "Enterprise EMS";

// 2. Function
const getEmployeeCount = (list) => list.length;

// 3. Destructuring
const { name, department } = employees[0];

// 4. Map - get employee names
const employeeNames = employees.map(employee => employee.name);

// 5. Filter - get IT employees
const itEmployees = employees.filter(employee => employee.department === "IT");

// 6. Reduce - calculate total salary
const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

// 7. Spread - add a new employee
const updatedEmployees = [
    ...employees,
    { id: 4, name: "Sneha", department: "Finance", salary: 45000 }
];

// 8. Optional chaining
const employeeRole = employees[0]?.role ?? "Not assigned";

// 9. Display results
console.log("Company:", company);
console.log("Employee count:", getEmployeeCount(employees));
console.log("Employee:", name, department);
console.log("Names:", employeeNames);
console.log("IT employees:", itEmployees);
console.log("Total salary:", totalSalary);
console.log("Updated count:", updatedEmployees.length);
console.log("Role:", employeeRole);
