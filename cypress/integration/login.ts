import { LoginPage } from "../pages/loginPage";
const loginPage = new LoginPage();

describe("E-commerce Website Automation Test: LOGIN TEST", () => {
  it("Navigate to URL https://www.saucedemo.com/", () => {
    loginPage.navigate("https://www.saucedemo.com/");
  });

  it("Enter Username", () => {
    loginPage.enterUsername("standard_user");
  });

  it("Enter Password", () => {
    loginPage.enterPassword("secret_sauce");
  });

  it("Click on Login button", () => {
    loginPage.clickLogin();
  });
});
