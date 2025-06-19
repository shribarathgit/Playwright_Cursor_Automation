import { expect, Page, Locator } from "@playwright/test";
import { environment } from "../environment/env";

export class LoginPage {
  page: Page;
  usernameInput: Locator;
  passwordInput: Locator;
  submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole("textbox", { name: "Username" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.submitButton = page.getByRole("button", { name: "Submit" });
  }

  async goto(): Promise<void> {
    await this.page.goto(environment.baseUrl);
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async clearAndFillUsername(username: string): Promise<void> {
    await this.usernameInput.click();
    await this.usernameInput.fill(username);
  }

  async clearAndFillPassword(password: string): Promise<void> {
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
  }

  async pressTabOnUsername(): Promise<void> {
    await this.usernameInput.press("Tab");
  }
}
