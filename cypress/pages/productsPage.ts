export class ProductsPage {
  itemName = "#item_4_title_link > .inventory_item_name";
  itemDesc =
    ":nth-child(1) > .inventory_item_description > .inventory_item_label > .inventory_item_desc";
  itemPic = "#item_4_img_link > .inventory_item_img";
  itemPrice =
    ":nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price";
  shoppingCartButton = ".shopping_cart_link";
  shoppingCartProductCount = ".shopping_cart_badge";
  addToCartButton1 = "[data-test=add-to-cart-sauce-labs-backpack]";
  addToCartButton2 = "[data-test=add-to-cart-sauce-labs-bike-light]";
  removeButton1 = "[data-test=remove-sauce-labs-backpack]";
  addToCartbuttonName = "Add to cart";
  removeButtonName = "Remove";

  checkProductName(name: string) {
    cy.get(this.itemName).should("be.visible").should("contain", name);
  }

  checkProductDesc(desc: string) {
    cy.get(this.itemDesc).should("be.visible").should("contain", desc);
  }

  checkProductImage() {
    cy.get(this.itemPic).should("be.visible");
  }

  checkProductPrice(price: string) {
    cy.get(this.itemPrice).should("be.visible").should("contain", price);
  }

  clickAddToCartButton1() {
    this.clickAddToCartButtons(this.addToCartButton1);
    this.cartCount("1");
  }

  clickAddToCartButton2() {
    this.clickAddToCartButtons(this.addToCartButton2);
    this.cartCount("2");
  }

  clickAddToCartButtons(button: string) {
    cy.get(button)
      .should("be.visible")
      .should("contain", this.addToCartbuttonName)
      .click();
  }

  cartCount(count: string) {
    cy.get(this.shoppingCartProductCount)
      .should("be.visible")
      .should("have.text", count);
  }

  //   checkCartBadge1() {
  //     this.cartCount("1");
  //   }

  //   checkCartBadge2() {
  //     this.cartCount("2");
  //   }

  clickRemoveButtons(button: string) {
    cy.get(button)
      .should("be.visible")
      .should("contain", this.removeButtonName)
      .click();
  }

  clickRemoveButton() {
    this.clickRemoveButtons(this.removeButton1);
    this.cartCount("1");
  }

  clickOnCart() {
    cy.get(this.shoppingCartButton).should("be.visible").click();
  }
}
