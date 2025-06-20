import { getDashboardLocators } from "../fixtures/fixtures.js";

export class DashboardPage {
    constructor(page) {
        this.page = page;
        this.locators = getDashboardLocators(page);
    }

    async clickPractice() {
        await this.locators.practiceLink.click();
    }

    async clickCourses() {
        await this.locators.coursesLink.click();
    }

    async clickContact() {
        await this.locators.contactLink.click();
    }

    async clickHome() {
        await this.locators.homeLink.click();
    }

    async clickHomeText() {
        await this.locators.homeText.click();
    }

    async clickHtml() {
        await this.locators.html.click();
    }
} 