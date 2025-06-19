import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/loginPage';
import { DashboardPage } from '../src/pages/dashboardPage';
import { Constants } from '../src/data/constants';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('student', 'Password123');
    await expect(page).toHaveURL(new RegExp(Constants.LOGIN_SUCCESS_URL));
});

test('1: navigate to Practice', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.clickPractice();
    // Add assertion for Practice page if needed
});

test('2: navigate to Courses', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.clickCourses();
    // Add assertion for Courses page if needed
});

test('3: navigate to Contact', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.clickContact();
    // Add assertion for Contact page if needed
});

test('4. click HTML', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.clickHtml();
    // Add assertion for HTML click if needed
});

test('5: navigate to Home', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.clickHome();
    // Add assertion for Home page if needed
});

test('6: click Home Text', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.clickHomeText();
    // Add assertion for Home Text click if needed
}); 