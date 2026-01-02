# 🎭 Playwright JavaScript Testing Framework

This repository contains a comprehensive Playwright-based testing framework for end-to-end (E2E) UI testing, API testing, and file operations. It includes Page Object Model (POM) implementations, utility classes, and configurations for multi-browser testing and CI/CD integration.

---

## 🚀 Features

- **UI Testing**: Automated tests for web applications using Playwright's browser automation.
- **API Testing**: Integration with REST APIs for login, order creation, and validation.
- **File Operations**: Excel file manipulation and download handling.
- **Page Object Model**: Organized test code with reusable page objects.
- **Multi-Browser Support**: Configurations for Chromium, Firefox, WebKit, Edge, and Chrome.
- **CI/CD Integration**: GitHub Actions workflow and Azure Playwright service support.
- **Reporting**: HTML and Allure reports for test results.

---

## 📂 Project Structure

- [`tests`](./tests): Test files for UI, API, and file operations.
- [`pageObjects`](./pageObjects): Page Object Model classes for UI interactions.
- [`utils`](./utils): Utility classes for API, Excel, and miscellaneous operations.
- [`testdata`](./testdata): JSON and JS files for test data.
- [`playwright.config.js`](./playwright.config.js): Main Playwright configuration.
- [`playwright_multibrowser.config.js`](./playwright_multibrowser.config.js): Multi-browser configuration.
- [`playwright.service.config.js`](./playwright.service.config.js): Azure Playwright service configuration.
- [`.github/workflows`](./.github/workflows): CI/CD pipeline definitions.
- [`package.json`](./package.json): Project dependencies and scripts.

---

## 🛠 Prerequisites

- **Node.js**: Version 14 or higher
- **npm** or **yarn**

---

## 📥 Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
   cd your-repo-name
Install dependencies:Bashnpm install
Install Playwright browsers:Bashnpx playwright install
🏃 Running TestsUse the following npm scripts defined in package.json:CommandDescriptionnpm run regressionRun all tests (Regression suite)npm run apiRun API-related testsnpm run fileopRun file operation testsnpm run smokeRun smoke UI testsnpm run webRun web UI testsnpm run browsercompatibilityRun browser compatibility tests⚙️ ConfigurationLocal Testing: Use playwright.config.js for default settings.Multi-Browser: Use playwright_multibrowser.config.js for cross-browser testing.Azure Service: Use playwright.service.config.js for cloud-based testing.🔄 CI/CDThe project includes a GitHub Actions workflow in .github/workflows/playwright.yml for automated testing on push/PR to main/master branches.📊 ReportingHTML reports: Generated in the playwright-report folder.Allure reports: Generated in the allure-results folder.🤝 ContributingFork the repository.Create a feature branch (git checkout -b feature-name).Make changes and add tests.Run tests locally to ensure everything passes.Submit a pull request.📜 LicenseThis project is licensed under the ISC License. See package.json for details.
