const {test, expect} = require('@playwright/test')


test('Browser Context Playwright Test',async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://www.rahulshettyacademy.com/loginpagePractise/');
});

test('Page Playwright Test',async ({page}) => {
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
});

test('Validate Incorrect Login Error',async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://www.rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshetty');
    await page.locator('[name="password"]').fill('learning');
    await page.locator('#signInBtn').click();
    console.log(await page.locator('[style*="block"]').textContent());
    await expect(page.locator('[style*="block"]')).toContain('Incorrect username/password.');
});

test('Validate Empty User Name Login Error',async ({page}) => {
        await page.goto('http://www.rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('');
    await page.locator('[name="password"]').fill('learning');
    await page.locator('#signInBtn').click();
    console.log(await page.locator('[style*="block"]').textContent());
    await expect(page.locator('[style*="block"]')).toContainText('Empty username/password.');
});

test('Get Login Credentials from page',async ({page}) => {
    await page.goto('http://www.rahulshettyacademy.com/loginpagePractise/');
    await page.waitForLoadState('networkidle');
    const loginStringArr = (await page.locator('.text-center.text-white').textContent()).split(' ');
    const userName = await loginStringArr[2];
    const passWord = await loginStringArr[5].split(')')[0];
    await console.log('User Name : '+userName+' and Password : '+passWord)
});

test.only('Interact Login page UI elements',async ({page}) => {
    const userNameField = page.locator('#username');
    const passwordField = page.locator('[name="password"]');
    const signInButton = page.locator('#signInBtn');
    const rdBtnUser = page.locator('input[value="user"]');
    const alertBtnOk = page.locator('#okayBtn');
    const selectBxUserType = page.locator('select.form-control');
    const chkBxTnC = page.locator('#terms');
    const linkDoc = page.locator('[href*="documents-request"]');
    await page.goto('http://www.rahulshettyacademy.com/loginpagePractise/');
    await page.waitForLoadState('networkidle');
    const loginStringArr = (await page.locator('.text-center.text-white').textContent()).split(' ');
    const userNameStr = await loginStringArr[2];
    const passWordStr = await loginStringArr[6].split(')')[0];
    await userNameField.fill(userNameStr);
    await passwordField.fill(passWordStr);
    await rdBtnUser.click();
    await alertBtnOk.click();
    await expect(rdBtnUser).toBeChecked();
    await selectBxUserType.selectOption('teach');
    await chkBxTnC.check();
    await expect(chkBxTnC).toBeChecked();
    await expect(linkDoc).toHaveAttribute('class','blinkingText')
});

test('Get Login Credentials from page and Login',async ({page}) => {
    const userNameField = page.locator('#username');
    const passwordField = page.locator('[name="password"]');
    const signInButton = page.locator('#signInBtn');
    const cardTitles = page.locator('h4.card-title');
    await page.goto('http://www.rahulshettyacademy.com/loginpagePractise/');
    await page.waitForLoadState('networkidle');
    const loginStringArr = (await page.locator('.text-center.text-white').textContent()).split(' ');
    const userNameStr = await loginStringArr[2];
    const passWordStr = await loginStringArr[6].split(')')[0];
    await userNameField.fill(userNameStr);
    await passwordField.fill(passWordStr);
    await signInButton.click();
    await expect(page.locator('div.container > a.navbar-brand')).toBeVisible();
    //await cardTitles.first().waitFor();
    //console.log(await cardTitles.allTextContents());
});



