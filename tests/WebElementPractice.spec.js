const {test, expect} = require('@playwright/test')

test('Interact elements on Practice Page',async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const practicePageHeader = page.locator('h1:has-text("Practice Page")');
    const radioBtn1 = page.locator('[value="radio1"]');
    const radioBtn2 = page.locator('[value="radio2"]');
    
})