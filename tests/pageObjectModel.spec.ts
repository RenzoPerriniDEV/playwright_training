import { test, expect } from '@playwright/test';

test.beforeEach(async ({ request, page }) => {
    // clear all todos
    await request.put('http://localhost:3000/api/set-all', { data: { items: [] } });
    //visit the page
    await page.goto('http://localhost:3000');

});

test('should be able to add todos', async ({ page }) => {
    //add a todo
    await page.locator('.new-todo').type('Buy milk');
    await page.locator('.new-todo').press('Enter');
    await page.waitForResponse('/add/');

    //add another todo
    await page.locator('.new-todo').type('Feed cat');
    await page.locator('.new-todo').press('Enter');
    await page.waitForResponse('/add/');

    //make sure we have two todos
    await expect(page.locator('.todo-list label')).toHaveText([
        'Buy milk',
        'Feed the cat',
    ]);
});