const fetchEmployees = async () => {
    try {
        console.log("Connecting to EMS API...");

        const response = await fetch("http://localhost:5000/api/employees");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const employees = await response.json();

        console.log("Total employees:", employees.length);

        employees.forEach(employee => {
            console.log(
                employee.employee_id,
                employee.full_name,
                employee.designation
            );
        });

    } catch (error) {
        console.error("API Error:", error.message);
    } finally {
        console.log("EMS API request completed.");
    }
};

fetchEmployees();