var webdriver = require("selenium-webdriver");
var chrome = require("selenium-webdriver/chrome");
var chromeOptions = new chrome.Options();
var assert = require("assert");
const { By, Key } = webdriver;

(async function question1() {
    driver = new webdriver.Builder()
        .forBrowser("chrome")
        .setChromeOptions(chromeOptions)
        .build();
    try {
        await driver.get('https://www.saucedemo.com/');

        const userNameTextBox = await driver.findElement(By.id("user-name"));
        const passwordTextBox = await driver.findElement(By.id("password"));
        const loginButton = await driver.findElement(By.className("submit-button"));
        assert(userNameTextBox.isDisplayed());
        assert(passwordTextBox.isDisplayed());
        assert(loginButton.isDisplayed());

        userNameTextBox.sendKeys("standard_user");
        passwordTextBox.sendKeys("secret_sauce");
        loginButton.click();

        const shoppingCartLink = driver.findElement(By.className("shopping_cart_link"));
        const optionsMenuButton = driver.findElement(By.id("react-burger-menu-btn"));
        const inventoryList = driver.findElement(By.className("inventory_list"));
        assert(shoppingCartLink.isDisplayed());
        assert(optionsMenuButton.isDisplayed());
        assert(inventoryList.isDisplayed());

        driver.findElement(By.id("react-burger-menu-btn")).click();

    } finally {
        driver.quit();
}})();
