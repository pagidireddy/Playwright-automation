import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import users from './test-data/users.json';

test.describe('Login Scenario', () => {
  test.beforeEach('opensite', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.dismissNotificationIfPresent();
  });

  test('validlogin', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.clickLogin();
    await loginPage.ValidMobileNumber(users.User.validnumber);
  });

  test('invalidlogin', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.clickLogin();
    await loginPage.InvalidMobilenumber(users.User.invalidnumber);
  });
});