// dashboardPage.js
import { Page, Locator } from "@playwright/test";

export class DashboardPage {
  page: Page;
  practiceLink: Locator;
  coursesLink: Locator;
  contactLink: Locator;
  homeLink: Locator;
  homeText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.practiceLink = page.getByRole("link", {
      name: "Practice",
      exact: true,
    });
    this.coursesLink = page.getByRole("link", { name: "Courses" });
    this.contactLink = page.getByRole("link", { name: "Contact" });
    this.homeLink = page.getByRole("link", { name: "Home" });
    this.homeText = page.getByText("Home Practice Courses Blog");
  }

  async clickPractice(): Promise<void> {
    await this.practiceLink.click();
  }

  async clickCourses(): Promise<void> {
    await this.coursesLink.click();
  }

  async clickContact(): Promise<void> {
    await this.contactLink.click();
  }

  async clickHome(): Promise<void> {
    await this.homeLink.click();
  }

  async clickHomeText(): Promise<void> {
    await this.homeText.click();
  }

  async clickHtml(): Promise<void> {
    await this.page.locator("html").click();
  }
}
