const {Builder, By, Key, Assert} = require("selenium-webdriver");
async function crm(){
    let driver = await new Builder().forBrowser("firefox").build();
    let assert = require("assert");

    try{
        await driver.get("https://demo.1crmcloud.com/login.php");
        await driver.findElement(By.id("login_user")).sendKeys("admin");
        await driver.findElement(By.id("login_pass")).sendKeys("admin");
        await driver.findElement(By.id("login_button")).click();
        
        await driver.sleep(5000);
        await driver.findElement(By.className("meta-profile")).click();
    
        const checktxt = await driver.findElement(By.id("_form_header")).getText();
        assert.equal(checktxt, "Administrator", "Get Text failed");
        console.log("Task succeed!")
    }catch(error){
        console.log("Task failed")
    }
}

crm();