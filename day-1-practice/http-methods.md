# HTTP Methods and Status Codes

## HTTP Methods

| Method | Purpose | EMS Example |
|---|---|---|
| GET | Retrieve data | GET /api/employees |
| POST | Create data | POST /api/employees |
| PUT | Update existing data | PUT /api/employees/1 |
| PATCH | Partially update data | Not currently implemented |
| DELETE | Delete data | DELETE /api/employees/1 |

## HTTP Status Codes

| Code | Meaning |
|---|---|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

## Practical Example

GET /api/employees

Expected success: 200 OK

POST /api/employees

Expected success: 201 Created

GET /api/employees/99999

Expected result for a missing employee: 404 Not Found

