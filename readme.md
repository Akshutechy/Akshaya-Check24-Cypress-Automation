
# Check24-Cypress-Assignment

This repository holds the Cypress - Javascript Automation tests as part of the assignment of Check24 organization for the role of Test Automation/ Quality Assurance Engineer Hotel.

Automated two test cases to filter out all links which contain the tracking param "wpset" or "utm_campaign" and check if they have the same value.

## TechStack
- Cypress version - 9.7.0
- JavaScript
- Mochawesome Report

## Installation

- Clone the repository using Git and save it in the local machine
- Open the cloned repository in any IDE(Preferable VS Code)
- Open a new Terminal and give command "npm install"

## Running Test Locally

- In the terminal enter the command "npm run test"
- This will execute both the test files and will generate the report
- It is expected one test to fail as there is an actual mismatch between the parameter of "utm_campaign" for the Haushalt website
- The Mochawesome report will be saved under the folder "cypress\reports\mochareports\report.html"

