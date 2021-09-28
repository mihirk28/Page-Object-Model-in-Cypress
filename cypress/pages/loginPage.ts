export class LoginPage {
  loginPage_username = "[data-test=username]";
  loginPage_password = "[data-test=password]";
  loginPage_loginButton = "[data-test=login-button]";
  homePageTitle = "Swag Labs";
  productsPageClass = ".title";
  productsPageName = "Products";

  navigate(url: string) {
    cy.visit(url);
    this.checkHomePageTitle();
  }

  checkHomePageTitle() {
    cy.title().should("eq", this.homePageTitle);
  }

  enterUsername(username: string) {
    cy.get(this.loginPage_username)
      .should("be.visible")
      .should("be.empty")
      .type(username);
  }

  enterPassword(password: string) {
    cy.get(this.loginPage_password)
      .should("be.visible")
      .should("be.empty")
      .type(password);
  }

  clickLogin() {
    cy.get(this.loginPage_loginButton).should("be.visible").click();
    this.productPageAppear();
  }

  productPageAppear() {
    cy.get(this.productsPageClass)
      .should("be.visible")
      .should("contain", this.productsPageName);
  }
}
