# API Automation with Cypress

## Overview

This repository contains automated tests for public APIs using Cypress. The tests cover common HTTP actions, including GET, PUT, POST, and DELETE requests. Each HTTP request has a separate test case with specific assertions applied to validate the functionality.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Tests](#tests)
- [Mochawesome Report](#mochawesome-report)
- [Automated User Authentication](#automated-user-authentication)


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alihaider121/apiAutomation.git

2. Install dependencies:
   Bash
  npm install

3. Folder Structure

   apiAutomation/
|-- cypress/
|   |-- fixtures/
|   |   |-- example.json
|   |-- integration/
|   |   |-- commonHttpActions/
|   |   |   |-- get.spec.js
|   |   |   |-- put.spec.js
|   |   |   |-- post.spec.js
|   |   |   |-- delete.spec.js
|   |   |-- userAuthentication/
|   |   |   |-- automatedAuthentication.spec.js
|   |-- plugins/
|   |   |-- index.js
|   |-- support/
|   |   |-- commands.js
|   |   |-- index.js
|-- mochawesome-report/
|-- cypress.json
|-- package.json
|-- README.md

### Tests 
GET Request TestDescription: 
Test the GET request functionality for a public API.File: cypress/integration/commonHttpActions/get.spec.jsAssertions: Validate the response status, content type, and specific data.
PUT Request TestDescription: Test the PUT request functionality for a public API.File: cypress/integration/commonHttpActions/put.spec.jsAssertions: Confirm the successful update of data.
POST Request TestDescription: Test the POST request functionality for a public API.File: cypress/integration/commonHttpActions/post.spec.jsAssertions: Verify the creation of new data and the response details.
DELETE Request TestDescription: Test the DELETE request functionality for a public API.File: cypress/integration/commonHttpActions/delete.spec.jsAssertions: Ensure the successful deletion of data.
Mochawesome ReportThe tests generate Mochawesome reports for clear and detailed test results. Access the reports in the mochawesome-report folder after test execution.
Automated User Authentication 
Automated Authentication TestDescription: Automate the user authentication process for a specific API.File: cypress/integration/userAuthentication/automatedAuthentication.spec.jsAssertions: Confirm successful authentication and access to protected resources.
