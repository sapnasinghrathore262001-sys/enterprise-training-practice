const getEmployees = () =>
    new Promise(resolve => {
        setTimeout(() => resolve(["Amit", "Priya", "Rahul"]), 1000);
    });

const getDepartments = () =>
    new Promise(resolve => {
        setTimeout(() => resolve(["IT", "HR", "Finance"]), 1000);
    });

const getProjects = () =>
    new Promise(resolve => {
        setTimeout(() => resolve(["Project A", "Project B"]), 1000);
    });

const loadDashboard = async () => {
    try {
        console.time("Total time");

        const [employees, departments, projects] = await Promise.all([
            getEmployees(),
            getDepartments(),
            getProjects()
        ]);

        console.log("Employees:", employees);
        console.log("Departments:", departments);
        console.log("Projects:", projects);

        console.timeEnd("Total time");
    } catch (error) {
        console.error("Dashboard loading failed:", error.message);
    }
};

loadDashboard();
