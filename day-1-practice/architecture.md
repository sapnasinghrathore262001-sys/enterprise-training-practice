# EMS - System Architecture

## Three-Tier Architecture

```mermaid
flowchart TD
    A[User / Browser] --> B[React Frontend]
    B --> C[Axios API Client]
    C --> D[Express Server]
    D --> E[Middleware]
    E --> F[API Routes]
    F --> G[JWT Authentication and Role Authorization]
    G --> H[Controllers]
    H --> I[MySQL Database]
    I --> H
    H --> J[JSON Response]
    J --> B
'```

## Request Flow

1. User performs an action in the React frontend.
2. Axios sends an HTTP request to the Express API.
3. Express processes middleware and routes.
4. Authentication and role authorization are checked where required.
5. Controllers process the request and interact with MySQL.
6. The backend returns a JSON response.
7. React displays the result to the user.

## Example API

GET /api/employees

POST /api/employees

PUT /api/employees/:id

DELETE /api/employees/:id

