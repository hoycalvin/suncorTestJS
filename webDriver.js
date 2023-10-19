var webdriver = require("selenium-webdriver");
var chrome = require("selenium-webdriver/chrome");
var chromeOptions = new chrome.Options();
var assert = require("assert");
const { By, Key } = webdriver;

(async function standardUserTest() {
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

        const shoppingCartLink = driver.findElement(By.className("shopping_cart_link"));
        const optionsMenuButton = driver.findElement(By.id("react-burger-menu-btn"));
        const inventoryList = driver.findElement(By.className("inventory_list"));
        assert(shoppingCartLink.isDisplayed());
        assert(optionsMenuButton.isDisplayed());
        assert(inventoryList.isDisplayed());

        optionsMenuButton.click();
        const optionsMenuList = driver.findElement(By.className("bm-item-list"));
        const optionsMenuCloseButton = driver.findElement(By.className("react-burger-cross-btn");
        assert(optionsMenuList.includes("All Items"));
        assert(optionsMenuList.includes("About"));
        assert(optionsMenuList.includes("Logout"));
        assert(optionsMenuList.includes("Reset App Store"));

        const backpackAddToCart = driver.findElement(By.id("add-to-cart-sauce-labs-backpack"));
        const bikeLightAddToCart = driver.findElement(By.id("add-to-cart-sauce-labs-bike-light"));
        backpackAddToCart.click();
        bikeLightAddToCart.click();
        const shoppingCartCounter = driver.findElement(By.className("shopping_cart_badge"));
        assert(shoppingCartCounter.includes("2"));
        shoppingCartLink.click();

    } finally {
        await driver.quit();
}})();

(async function lockedUserTest() {
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

        const errorMessageContainer = await driver.findElement(By.className("error-message-container"));
        assert(errorMessageContainer.includes("Epic sadface: Sorry, this user has been locked out."))
} finally {
    await driver.quit();
}})();