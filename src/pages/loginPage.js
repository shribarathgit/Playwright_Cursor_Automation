import { expect } from "@playwright/test";
import { environment } from "../environment/env";
import { getLoginLocators } from "../fixtures/fixtures.js";

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.locators = getLoginLocators(page);
    }

    async goto() {
        await this.page.goto(environment.baseUrl);
    }

    async login(username, password) {
        await this.locators.usernameInput.fill(username);
        await this.locators.passwordInput.fill(password);
        await this.locators.submitButton.click();
    }

    async clearAndFillUsername(username) {
        await this.locators.usernameInput.click();
        await this.locators.usernameInput.fill(username);
    }

    async clearAndFillPassword(password) {
        await this.locators.passwordInput.click();
        await this.locators.passwordInput.fill(password);
    }

    async pressTabOnUsername() {
        await this.locators.usernameInput.press("Tab");
    }
} 