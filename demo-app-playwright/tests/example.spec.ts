import { test, expect } from '@playwright/test';
import { headingText } from '../src/copy'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173');
});

test('Heading should be visible', async ({ page }) => {
  const heading = page.locator('h1', {hasText: headingText});
  await expect(heading).toBeVisible();
});

// Test descrip: agroup similar tests to test a funcionallity
test.describe('Counter', () => {
  test('Should be visible', async ({ page }) => {
    const counterButton = page.locator('#counter');
    await expect(counterButton).toBeVisible();
  })
  test('should increment', async ({ page }) => {
    const counterButton = page.locator('#counter');
    await expect(counterButton).toHaveText('count is 0');
    await counterButton.click();
    await expect(counterButton).toHaveText('count is 1');
  });
});