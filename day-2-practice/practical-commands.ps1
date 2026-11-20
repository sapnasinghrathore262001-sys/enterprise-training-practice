# Day 2 - Practical Commands

# Run JavaScript practice files
node .\day-2-practice\javascript-practice.js
node .\day-2-practice\async-practice.js
node .\day-2-practice\promise-all.js
node .\day-2-practice\fetch-practice.js
node .\day-2-practice\ems-fetch.js

# Enter TypeScript practice folder
Set-Location .\day-2-practice\typescript-practice

# Initialize TypeScript project
npm init -y
npm install typescript

# Compile TypeScript using tsconfig.json
npx tsc

# Execute compiled JavaScript
node .\employee.js

# Return to project root
Set-Location ..\..
