import { LoginPage } from "../pages/loginPage";
const loginPage = new LoginPage();
export class TestOne {
  test_01() {
    loginPage.navigate("https://www.saucedemo.com/");
    loginPage.enterUsername("standard_user");
    loginPage.enterPassword("secret_sauce");
    loginPage.clickLogin();
  }
}
