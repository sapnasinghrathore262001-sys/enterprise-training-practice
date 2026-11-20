# Day 11 – Role-Based Access Control (RBAC)

## Topics Covered

1. Authentication
   - Verifies the identity of a user.
   - Uses JWT (JSON Web Token).

2. Authorization
   - Checks what an authenticated user is allowed to access.

3. Role-Based Access Control (RBAC)
   - Grants or denies access based on user roles.
   - Roles in our project: ADMIN, HR, MANAGER, EMPLOYEE.

## Middleware

File: backend/middleware/authMiddleware.js

- verifyToken: Validates the JWT token.
- requireRoles: Checks whether the user's role is permitted.

## Route Permissions

- GET /api/auth/me: Any authenticated user.
- GET /api/dashboard/stats: Any authenticated user.
- GET /api/audit-logs: ADMIN only.
- Employee create/update/delete: ADMIN and HR.
- Project and assignment management: ADMIN and MANAGER.
- Employee skill management: ADMIN and HR.
- Project skill management: ADMIN and MANAGER.

## Postman Practical Tests

### Test 1 – ADMIN Access
- Method: GET
- Endpoint: /api/audit-logs
- Result: Successful response (200 OK).

### Test 2 – HR Access
- Method: GET
- Endpoint: /api/audit-logs
- Result: 403 Forbidden.
- Message: Access denied. Requires one of the following roles: [ADMIN]

## Important Status Codes

- 200: Request successful.
- 401: Unauthorized – authentication required or invalid.
- 403: Forbidden – user does not have permission.

## Key Learning

Authentication verifies who the user is.
Authorization verifies what the user can do.
RBAC controls access according to assigned roles.

## Day 11 Status

- [x] Inspected authentication middleware.
- [x] Understood verifyToken.
- [x] Understood requireRoles.
- [x] Inspected route-level permissions.
- [x] Tested ADMIN access.
- [x] Tested HR access restriction.
