// Promise example
const getEmployees = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Amit" },
                { id: 2, name: "Priya" },
                { id: 3, name: "Rahul" }
            ]);
        }, 1000);
    });
};

// Async/await example
const displayEmployees = async () => {
    try {
        console.log("Loading employees...");

        const employees = await getEmployees();

        console.log("Employees loaded:", employees);
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Request completed.");
    }
};

displayEmployees();
