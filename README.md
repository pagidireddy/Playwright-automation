# Playwright Automation Testing Framework

## Project Overview

This project is a test automation framework for the "House of Rare" e-commerce website. The framework is designed to automate critical user flows to ensure the website's functionality, reliability, and performance.

## Features

- Modular and scalable framework using Playwright with TypeScript.
- Page Object Model (POM) design pattern for maintainability and reusability.
- Automated tests for key user flows: login, search, product and checkout page navigation.
- Cross-browser testing capabilities.
- Detailed test reports and logs.

## Directory Structure
├── tests/

│ ├── pages/

│ │ └── loginPage.ts

│ ├── search.spec.ts

│ └── pdp.spec.ts

├── playwright.config.ts

├── package.json

├── tsconfig.json

## Commands
Run tests:
```
npx playwright test --headed --project firefox
```
test reports:
```
npx playwright show-report
```
