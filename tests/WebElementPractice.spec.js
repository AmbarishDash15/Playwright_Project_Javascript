const {test, expect} = require('@playwright/test')

test.only('Interact elements on Practice Page',async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    //radio button
    const radioBtn1 = page.locator('[value="radio1"]');
    const radioBtn2 = page.locator('[value="radio2"]');
    await radioBtn1.click();
    await expect(radioBtn1).toBeChecked();
    await radioBtn2.check();
    const expectBool = await radioBtn2.isChecked();
    expect(expectBool).toBeTruthy();
    //auto-complete combobox
    const countryToSelect = 'India'
    const autoCompComboBx = page.locator('input#autocomplete');
    const countryList = page.locator('ul.ui-autocomplete li');
    await autoCompComboBx.pressSequentially(countryToSelect, {delay: 100});
    await countryList.first().waitFor();
    const countryCount = await countryList.count();
    for(var i = 0;i<=countryCount;i++){
        if(await countryList.nth(i).textContent() === countryToSelect){
            await countryList.nth(i).click();
            break;
        }
    }
    expect(await autoCompComboBx.inputValue()).toBe(countryToSelect)
    //dropdown
    const dropDown = await page.locator('select#dropdown-class-example');
    await dropDown.selectOption('Option1');
    expect(await dropDown.inputValue()).toBe('option1');
    await dropDown.selectOption('Option2');
    const drpDnVal = await dropDown.inputValue();
    expect(await dropDown.inputValue()).toBe(('Option2').toLowerCase());
    //Checkbox
    const chkBxOpn1 = await page.locator('input#checkBoxOption1');
    const chkBxOpn2 = await page.locator('input#checkBoxOption2');
    await chkBxOpn1.check();
    await chkBxOpn2.click();
    expect(await chkBxOpn1.isChecked()).toBeTruthy();
    await expect(chkBxOpn2).toBeChecked();
    //switch window
    const openWindBtn = await page.locator('button#openwindow');
    const [newWinPage] = await Promise.all([
        context.waitForEvent('page'),
        openWindBtn.click()
    ])
    await newWinPage.waitForLoadState('networkidle');
    expect(await newWinPage.locator('div.logo a[href="https://www.qaclickacademy.com"]')).toBeVisible();
    //await newWinPage.close();
    //switch tab
    const openTabLink = await page.locator('fieldset a#opentab');
    const [newTabPage] = await Promise.all([
        context.waitForEvent('page'),
        openTabLink.click()
    ])
    await newTabPage.waitForLoadState('networkidle');
    expect(await newTabPage.locator('div.logo a[href="https://www.qaclickacademy.com"]')).toBeVisible();
    //await newTabPage.close();
    //Alert handling
    const nameEditBox = await page.locator('input#name');
    const btnAlert = await page.locator('input#alertbtn');
    await nameEditBox.fill('Tester');
    await btnAlert.click();
})