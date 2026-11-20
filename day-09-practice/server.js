const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/health" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(JSON.stringify({
            success: true,
            message: "Server is healthy"
        }));
    }

    else if (req.url === "/api/info" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(JSON.stringify({
            application: "Enterprise Employee Management System",
            version: "1.0.0",
            backend: "Node.js"
        }));
    }

    else {
        res.writeHead(404, { "Content-Type": "application/json" });

        res.end(JSON.stringify({
            success: false,
            message: "Route not found"
        }));
    }

});

server.listen(4000, () => {
    console.log("Practice server running on port 4000");
});