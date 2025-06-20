// fixtures.js
// Export locators for DashboardPage
export function getDashboardLocators(page) {
    return {
        practiceLink: page.getByRole("link", { name: "Practice", exact: true }),
        coursesLink: page.getByRole("link", { name: "Courses" }),
        contactLink: page.getByRole("link", { name: "Contact" }),
        homeLink: page.getByRole("link", { name: "Home" }),
        homeText: page.getByText("Home Practice Courses Blog"),
        html: page.locator("html"),
    };
}

// Export locators for LoginPage
export function getLoginLocators(page) {
    return {
        usernameInput: page.getByRole("textbox", { name: "Username" }),
        passwordInput: page.getByRole("textbox", { name: "Password" }),
        submitButton: page.getByRole("button", { name: "Submit" }),
    };
} 