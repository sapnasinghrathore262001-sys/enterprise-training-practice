# Day 2 - Modern JavaScript, Async Programming and TypeScript

## Topics Practised

1. JavaScript variables, functions and arrow functions.
2. Objects, arrays and destructuring.
3. map(), filter() and reduce().
4. Spread operator and optional chaining.
5. Promises and setTimeout().
6. async/await and try/catch/finally.
7. Promise.all() to execute multiple promises concurrently.
8. Fetch API to retrieve employee data from the local EMS backend.
9. TypeScript interfaces, arrays and functions.
10. Generic API response using ApiResponse<T>.
11. TypeScript strict mode and type checking.
12. API success, HTTP error and network error handling.

## Practical Files

- javascript-practice.js
- async-practice.js
- promise-all.js
- fetch-practice.js
- ems-fetch.js
- typescript-practice/employee.ts
- typescript-practice/employee.js
- typescript-practice/tsconfig.json

## API Testing

Local API:
http://localhost:5000/api/employees

Test scenarios:

1. Successful API request - fetched 4 employees.
2. Invalid API endpoint - received HTTP 404.
3. Unavailable server port - handled network error.
4. Restored original API URL - successfully fetched employees again.

## TypeScript Practice

- Created Employee and ApiEmployee interfaces.
- Created generic ApiResponse<T> interface.
- Practised map(), filter() and reduce().
- Tested valid and invalid data types.
- Enabled strict mode.
- Compiled using npx tsc.
- Executed using node employee.js.

## Day 2 Status

Completed practical exercises and verified successful execution.
