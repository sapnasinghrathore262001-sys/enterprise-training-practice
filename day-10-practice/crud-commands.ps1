# DAY 10 - CRUD API PRACTICE
# Reference commands - do not store real passwords or JWT tokens here.

$baseUrl = "http://localhost:5000/api/employees"

# ==========================================
# 1. GET - READ EMPLOYEES
# ==========================================

# Get all employees
Invoke-RestMethod -Uri $baseUrl -Method GET

# Search employees
Invoke-RestMethod -Uri "$baseUrl?search=Rahul" -Method GET

# Filter by department
Invoke-RestMethod -Uri "$baseUrl?department_id=1" -Method GET

# Filter by availability
Invoke-RestMethod -Uri "$baseUrl?availability=AVAILABLE" -Method GET

# Combined filters
Invoke-RestMethod -Uri "$baseUrl?department_id=1&availability=ASSIGNED" -Method GET

# Get employee by ID
Invoke-RestMethod -Uri "$baseUrl/1" -Method GET

# ==========================================
# 2. AUTHENTICATION
# ==========================================

# Login token is stored locally in the $token variable.
# Never save the actual token in this file.

# Verify logged-in user
# Invoke-RestMethod -Uri "http://localhost:5000/api/auth/me" `
# -Method GET -Headers @{ Authorization = "Bearer $token" }

# ==========================================
# 3. POST - CREATE EMPLOYEE
# ==========================================

# Example request body
$newEmployee = @{
    employee_id = "EMP006"
    full_name = "Test Employee"
    email = "test.employee006@company.com"
    department_id = 1
} | ConvertTo-Json

# Create employee (uncomment to execute)
# Invoke-RestMethod -Uri $baseUrl -Method POST `
# -Headers @{ Authorization = "Bearer $token" } `
# -ContentType "application/json" -Body $newEmployee

# ==========================================
# 4. PUT - UPDATE EMPLOYEE
# ==========================================

# Example update
$updateBody = @{
    designation = "Junior Software Engineer"
} | ConvertTo-Json

# Replace 7 with the actual employee ID
# Invoke-RestMethod -Uri "$baseUrl/7" -Method PUT `
# -Headers @{ Authorization = "Bearer $token" } `
# -ContentType "application/json" -Body $updateBody

# ==========================================
# 5. DELETE - REMOVE EMPLOYEE
# ==========================================

# Replace 7 with the actual employee ID
# Invoke-RestMethod -Uri "$baseUrl/7" -Method DELETE `
# -Headers @{ Authorization = "Bearer $token" }

# ==========================================
# 6. VALIDATION
# ==========================================

# Required-field validation
$invalidBody = @{
    employee_id = "EMP006"
    full_name = "Validation Test"
    department_id = 1
} | ConvertTo-Json

# Expected result: HTTP 400 - required fields missingDay 10 CRUD Practice Commands
