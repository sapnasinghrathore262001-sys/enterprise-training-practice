const fetchEmployees = async () => {
    try {
        console.log("Fetching employees...");

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const employees = await response.json();

        console.log("Total employees:", employees.length);
        console.log("First employee:", employees[0].name);
    } catch (error) {
        console.error("Fetch failed:", error.message);
    } finally {
        console.log("Fetch operation completed.");
    }
};

fetchEmployees();
