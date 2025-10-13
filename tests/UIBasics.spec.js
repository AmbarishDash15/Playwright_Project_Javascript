const {test, expect} = require('@playwright/test')


test.skip('Browser Context Playwright Test',async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://www.rahulshettyacademy.com/loginpagePractise/');
});

test.skip('Page Playwright Test',async ({page}) => {
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
});

test.skip('Validate Incorrect Login Error',async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://www.rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshetty');
    await page.locator('[name="password"]').fill('learning');
    await page.locator('#signInBtn').click();
    console.log(await page.locator('[style*="block"]').textContent());
    await expect(page.locator('[style*="block"]')).toContain('Incorrect username/password.');
});

test.skip('Validate Empty User Name Login Error',async ({page}) => {
        await page.goto('http://www.rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('');
    await page.locator('[name="password"]').fill('learning');
    await page.locator('#signInBtn').click();
    console.log(await page.locator('[style*="block"]').textContent());
    await expect(page.locator('[style*="block"]')).toContainText('Empty username/password.');
});

test.only('Get Login Credentials from page',async ({page}) => {
    //const context = await browser.newContext();
    //const page = await context.newPage();
    await page.goto('http://www.rahulshettyacademy.com/loginpagePractise/');
    await page.waitForLoadState('networkidle');
    const loginStringArr = (await page.locator('.text-center.text-white').textContent()).split(' ');
    const userName = await loginStringArr[2];
    const passWord = await loginStringArr[5].split(')')[0];
    await console.log('User Name : '+userName+' and Password : '+passWord)

});