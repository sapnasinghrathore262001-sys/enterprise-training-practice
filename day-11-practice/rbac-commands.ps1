# Day 11 – RBAC Inspection Commands

# 1. List middleware files
Get-ChildItem .\backend\middleware

# 2. Read authentication and authorization middleware
Get-Content .\backend\middleware\authMiddleware.js

# 3. Find middleware usage across routes
Get-ChildItem .\backend\routes -Recurse -File -Include *.js |
    Select-String -Pattern 'verifyToken|requireRoles'

# 4. Check Day 11 practice files
Get-ChildItem .\day-11-practice
