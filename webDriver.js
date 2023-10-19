var webdriver = require("selenium-webdriver");
var chrome = require("selenium-webdriver/chrome");
var chromeOptions = new chrome.Options();
var assert = require("assert");
const { By, Key } = webdriver;

driver = new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

driver.get('https://www.saucedemo.com/');

Assert.assertTrue(driver.findElement(By.xpath,"//input[@id='user-name']").isDisplayed());
Assert.assertTrue(driver.findElement(By.xpath,"//input[@id='password']").isDisplayed());
Assert.assertTrue(driver.findElement(By.className,"submit-button").isDisplayed());

driver.findElement(By.xpath,"//input[@id='user-name']").sendKeys('standard_user');
driver.findElement(By.xpath,"//input[@id='password']"); //.sendKeys('secret_sauce', Key.RETURN);
driver.findElement(By.className,"submit-button").click();

driver.close();