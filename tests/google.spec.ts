import { test, expect } from '@playwright/test';

test('Page demo', async ({ page }) => {

    // Force timeout
    //test.setTimeout(2 * 1000);

    // arrange
    const input = page.locator('[title=Buscar]');
    
    // act
    await page.goto('https://google.com');
    await input.type('playwright');
    await input.press('Enter');
    
    // assert
    await expect(page).toHaveTitle('playwright - Buscar con Google');    
});