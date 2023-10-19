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
        const optionsMenuInventoryButton = driver.findElement(By.id("inventory_sidebar_link");
        const optionsMenuAboutButton = driver.findElement(By.id("about_sidebar_link");
        const optionsMenuLogoutButton = driver.findElement(By.id("logout_sidebar_link");
        const optionsMenuResetButton = driver.findElement(By.id("reset_sidebar_link");
        const optionsMenuCloseButton = driver.findElement(By.className("react-burger-cross-btn");

        assert(optionsMenuInventoryButton.isDisplayed());
        assert(optionsMenuAboutButton.isDisplayed());
        assert(optionsMenuLogoutButton.isDisplayed());
        assert(optionsMenuResetButton.isDisplayed());
        optionsMenuCloseButton.click();

        const backpackAddToCart = driver.findElement(By.id("add-to-cart-sauce-labs-backpack"));
        const bikeLightAddToCart = driver.findElement(By.id("add-to-cart-sauce-labs-bike-light"));
        backpackAddToCart.click();
        bikeLightAddToCart.click();
        const shoppingCartCounter = driver.findElement(By.className("shopping_cart_badge"));
        assert(shoppingCartCounter.includes("2"));
        shoppingCartLink.click();

        const shoppingCartList = driver.findElement(By.className("cart_list"));
        assert(shoppingCartList.isDisplayed());
        assert(shoppingCartList.length() == 2);
        assert(shoppingCartList.includes("Sauce Labs Backpack"));
        assert(shoppingCartList.includes("Sauce Labs Bike Light"));

        const removeBackpackButton = driver.findElement(By.className("remove-sauce-labs-backpack"));
        const removeBikeLightButton = driver.findElement(By.className("remove-sauce-labs-bike-light"));
        const checkoutButton = driver.findElement(By.id("checkout"));
        const continueShoppingButton = driver.findElement(By.id("continue-shopping"));

        assert(removeBackpackButton.isDisplayed());
        assert(removeBikeLightButton.isDisplayed());
        assert(checkoutButton.isDisplayed());
        assert(continueShoppingButton.isDisplayed());

        const checkoutHeader = driver.findElement(By.className("header_secondary_container"));
        const firstNameForm = driver.findElement(By.xpath("//input[@id='first-name']"));
        const lastNameForm = driver.findElement(By.xpath("//input[@id='last-name']"));
        const postalCodeForm = driver.findElement(By.xpath("//input[@id='postal-code']"));
        const cancelButton = driver.findElement(By.id("cancel"));
        const continueButton = driver.findElement(By.xpath("continue"));

        assert(checkoutHeader.includes("Checkout: Your Information"));
        assert(firstNameForm.isDisplayed());
        assert(lastNameForm.isDisplayed());
        assert(postalCodeForm.isDisplayed());
        assert(cancelButton.isDisplayed());
        assert(continueButton.isDisplayed());

        firstNameForm.sendKeys("firstname");
        firstNameForm.sendKeys("lastname");
        firstNameForm.sendKeys("A1A 2B2");
        continueButton.click();

        const summaryInfo = driver.findElement(By.className("summary_info")
        const taxLabel = driver.findElement(By.className("summary_tax_label"));
        const totalLabel = driver.findElement(By.className("summary_total_label"));
        const subTotalLabel = driver.findElement(By.className("summary_subtotal_label"));
        const finishButton = driver.findElement(By.id("finish"));

        assert(shoppingCartList.isDisplayed());
        assert(cancelButton.isDisplayed());
        assert(finishButton.isDisplayed());
        assert(shoppingCartList.length() == 2);
        assert(shoppingCartList[0].includes("Sauce Labs Backpack")));
        assert(shoppingCartList[0].includes("$29.99")));
        assert(shoppingCartList[1].includes("Sauce Labs Bike Light")));
        assert(shoppingCartList[1].includes("$9.99")));

        assert(summaryInfo.includes("Payment Information"));
        assert(summaryInfo.includes("Shipping Information"));
        assert(summaryInfo.includes("Price Total"));
        assert(taxLabel.isDisplayed());
        assert(taxLabel.includes("$3.20"));
        assert(subTotalLabel.isDisplayed());
        assert(subTotalLabel.includes("$39.98"));
        assert(totalLabel.isDisplayed());
        assert(totalLabel.includes("$43.18"));
        finishButton.click();

        const ponyExpress = driver.findElement(By.className("pony_express");
        const orderCompleteHeader = driver.findElement(By.className("complete-header");
        const backHomeButton = driver.findElement(By.className("back-to-products");

        assert(checkoutHeader.includes("Checkout: Complete!"));
        assert(ponyExpress.isDisplayed());
        assert(orderCompleteHeader.isDisplayed()));
        assert(backHomeButton.isDisplayed()));
        backHomeButton.click();

        assert(optionsMenuButton.isDisplayed());
        optionsMenuButton.click();
        optionsMenuLogoutButton.click();

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