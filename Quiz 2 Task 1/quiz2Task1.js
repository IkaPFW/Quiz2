const {Builder, By, Key, util} = require("selenium-webdriver");
async function orangehrm(){
    let driver = await new Builder().forBrowser("firefox").build();
    let assert = require("assert");
    
    try{
        await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
        await driver.findElement(By.id("txtUsername")).sendKeys("opensourcecms");
        await driver.findElement(By.id("txtPassword")).sendKeys("opensourcecms");
        await driver.findElement(By.id("btnLogin")).click();

        const checktxt = await driver.findElement(By.xpath("//li")).getText();
        assert.equal(checktxt, "Welcome Admin", "Get text failed");
        console.log("Task succeed!");
    }catch (error){
        console.log("Task failed");
    }
}

orangehrm();