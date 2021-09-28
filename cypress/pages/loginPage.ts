export class LoginPage {
  loginPage_username = "[data-test=username]";
  loginPage_password = "[data-test=password]";
  loginPage_loginButton = "[data-test=login-button]";

  navigate(url: string) {
    cy.visit(url);
  }

  enterUsername(username: string) {
    cy.get(this.loginPage_username).type(username);
  }

  enterPassword(password: string) {
    cy.get(this.loginPage_password).type(password);
  }

  clickLogin() {
    cy.get(this.loginPage_loginButton).click();
  }
}
