"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Practice employee data
const employees = [
    { id: 1, name: "Amit", department: "IT", salary: 50000 },
    { id: 2, name: "Priya", department: "HR", salary: 45000 },
    { id: 3, name: "Rahul", department: "IT", salary: 60000 }
];
// Generic API response
const response = {
    success: true,
    message: "Employees fetched successfully",
    data: employees
};
console.log("Practice API Response:", response);
// MAP
const names = employees.map(emp => emp.name);
console.log("Employee Names:", names);
// FILTER
const itEmployees = employees.filter(emp => emp.department === "IT");
console.log("IT Employees:", itEmployees);
// REDUCE
const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log("Total Salary:", totalSalary);
// Function with parameter and return types
function getEmployeeNames(employees) {
    return employees.map(emp => emp.name);
}
console.log("Names using function:", getEmployeeNames(employees));
// REAL EMS API FETCH AND ERROR HANDLING
async function fetchEmployees() {
    try {
        console.log("Loading EMS employees...");
        const apiResponse = await fetch("http://localhost:5000/api/employees");
        if (!apiResponse.ok) {
            throw new Error(`API Error: ${apiResponse.status}`);
        }
        const data = await apiResponse.json();
        console.log("EMS employees fetched successfully:");
        console.log("Total employees:", data.length);
        data.forEach(emp => {
            console.log(emp.employee_id, emp.full_name, emp.department_name, emp.designation);
        });
    }
    catch (error) {
        if (error instanceof TypeError) {
            console.log("Network Error: Unable to connect to server.");
        }
        else if (error instanceof Error) {
            console.log("Error:", error.message);
        }
    }
    finally {
        console.log("EMS API request completed.");
    }
}
fetchEmployees();
//# sourceMappingURL=employee.js.map