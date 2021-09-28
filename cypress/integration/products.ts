import { ProductsPage } from "../pages/productsPage";
const productsPage = new ProductsPage();

describe("E-commerce Website Automation Test: PRODUCTS TEST", () => {
  it("Check Product Information", () => {
    productsPage.checkProductName("Sauce Labs Backpack");
    productsPage.checkProductDesc(
      "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
    );
    productsPage.checkProductImage();
    productsPage.checkProductPrice("$29.99");
  });

  it("Add 1st Product to cart", () => {
    productsPage.clickAddToCartButton1();
  });

  it("Add 2nd Product to cart", () => {
    productsPage.clickAddToCartButton2();
  });

  it("Remove One Product from cart", () => {
    productsPage.clickRemoveButton();
  });

  it("Go to my cart", () => {
    productsPage.clickOnCart();
  });
});
