const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.demo.page');
const AppPage = require('../pageobjects/app.page');
/**
 * Step definition for "user is on HomePage"
 * Starts the app and navigates to the home page
 */
Given('user is on HomePage', async () => {
  await browser.startActivity('com.saucelabs.mydemoapp.rn', 'com.saucelabs.mydemoapp.rn.MainActivity');
});
/**
 * Step definition for "user enters invalid (.*) & (.*)"
 * Enters invalid username and password
 * @param {string} username - Invalid username
 * @param {string} password - Invalid password
 */
When(/^user enters invalid (.*) & (.*)$/, async (username, password) => {
  const loginPage = new LoginPage();
  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
});
/**
 * Step definition for "user enters valid (.*) & (.*)"
 * Enters valid username and password
 * @param {string} username - Valid username
 * @param {string} password - Valid password
 */
When(/^user enters valid (.*) & (.*)$/, async (username, password) => {
  const loginPage = new LoginPage();
  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
});
/**
 * Step definition for "clicks on login button"
 * Clicks on the login button
 */
When('clicks on login button', async () => {
  const loginPage = new LoginPage();
  await loginPage.clickLoginButton();
  await browser.pause(2000);
});
/**
 * Step definition for "user is navigated to app"
 * Verifies that the user is navigated to the app page
 */
Then('user is navigated to app', async () => {
  const appPage = new AppPage();
  await appPage.waitForHamburgerIconToBeVisible();
  console.log('Hamburger icon is visible');
});
/**
 * Step definition for "text (.*) is displayed"
 * Verifies that the expected text is displayed
 * @param {string} msg - Expected text
 */
Then(/^text (.*) is displayed$/, async (msg) => {

  const appPage = new AppPage();
  const text = await appPage.getProductsText();
  console.log(`Title found: ${text}`);
  console.log(msg)
  // expect(text).toBe(msg.trim());
  expect(text).toEqual(msg);
});
/**
 * Step definition for "user clicks on hamburger icon"
 * Clicks on the hamburger icon
 */
When('user clicks on hamburger icon', async () => {
  const appPage = new AppPage();
  await appPage.hamburgerIcon.click();
});
/**
 * Step definition for "user clicks on login text"
 * Clicks on the login text
 */
When('user clicks on login text', async () => {
  const loginPage = new LoginPage();
  await loginPage.clickLoginText();
});


