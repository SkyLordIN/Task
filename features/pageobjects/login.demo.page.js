const { By } = require('webdriverio');

class LoginPage {
  /** Username input field */
  get usernameInput() {
    return $('//android.widget.EditText[@content-desc="Username input field"]');
  }
  /** Password input field */
  get passwordInput() {
    return $('//android.widget.EditText[@content-desc="Password input field"]');
  }
  /** Login Button input field */

  get loginButton() {
    return $('//android.view.ViewGroup[@content-desc="Login button"]');
  }

    /** Login Text  field */

  get loginText() {
    return $('//android.widget.TextView[@text="Log In"]');
  }

/** Clicks on the login text */
  async clickLoginText() {
    await this.loginText.click();
  }
  /** Enters the username @param {string} username - The username to enter */
  async enterUsername(username) {
    await this.usernameInput.setValue(username);
  }
 /** Enters the password  @param {string} password - The password to enter */
  async enterPassword(password) {
    await this.passwordInput.setValue(password);
  }
/** Clicks on the login button */
  async clickLoginButton() {
    await this.loginButton.click();
  }
}

module.exports = LoginPage;