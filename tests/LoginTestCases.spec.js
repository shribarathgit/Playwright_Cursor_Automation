import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/loginPage';
import { Constants } from '../src/data/constants';
import { ValidationMessages } from '../src/data/validationMessages';

// Invalid password scenario

test('1: should show error for invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.clearAndFillUsername('student');
    await loginPage.clearAndFillPassword('hjhjhjhj');
    await loginPage.locators.submitButton.click();
    await expect(page.getByText(ValidationMessages.INVALID_PASSWORD).first()).toBeVisible();
});

// Invalid username scenario

test('2: should show error for invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.clearAndFillUsername('hjhjhj');
    await loginPage.pressTabOnUsername();
    await loginPage.clearAndFillPassword('hjhjjh');
    await loginPage.locators.submitButton.click();
    await expect(page.getByText(ValidationMessages.INVALID_USERNAME).first()).toBeVisible();
});

// Valid login scenario

test('3: should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.clearAndFillUsername('student');
    await loginPage.pressTabOnUsername();
    await loginPage.clearAndFillPassword('Password123');
    await loginPage.locators.submitButton.click();
    await expect(page).toHaveURL(new RegExp(Constants.LOGIN_SUCCESS_URL));
    await expect(page.getByText(Constants.LOGIN_SUCCESS_TEXT, { exact: false })).toBeVisible();
});