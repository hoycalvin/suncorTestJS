const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
var assert = require('assert');

(async function example() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.XPATH,"//input[@id='user-name']").sendKeys('standard_user');
        await driver.findElement(By.XPATH,"//input[@id='user-name']").sendKeys('secret_sauce', Key.RETURN);
    } finally {
        await driver.quit();
    }
})();