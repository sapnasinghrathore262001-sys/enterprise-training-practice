const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "employees.json");

// Get employee details from command-line arguments
const [, , name, role] = process.argv;

if (!name || !role) {
    console.log('Usage: node employee-cli.js "Employee Name" "Role"');
    process.exit(1);
}

// Read existing employee records
let employees = [];

if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");

    if (data.trim()) {
        employees = JSON.parse(data);
    }
}

// Create a new employee
const employee = {
    id: employees.length + 1,
    name: name,
    role: role
};

employees.push(employee);

// Write employee records into JSON file
fs.writeFileSync(
    filePath,
    JSON.stringify(employees, null, 2)
);

console.log("Employee saved successfully!");

// Read and display saved records
const savedData = fs.readFileSync(filePath, "utf8");

console.log("All employees:");
console.log(JSON.parse(savedData));