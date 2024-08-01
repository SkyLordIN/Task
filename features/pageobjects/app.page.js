const { By } = require('webdriverio');

class AppPage {
  get hamburgerIcon() {
    return browser.$('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView');
  }

  get productsText() {
    return browser.$('//android.widget.TextView[@text="Products"]');
  }

  async waitForHamburgerIconToBeVisible() {
    await this.hamburgerIcon.waitForExist();
  }

  async getProductsText() {
    return await this.productsText.getText();
  }
}

module.exports = AppPage;