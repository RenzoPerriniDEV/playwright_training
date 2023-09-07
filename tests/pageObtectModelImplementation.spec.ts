import { test, expect } from '@playwright/test';
import { TodoPage } from '../test-utils/TodoPage';

test.beforeEach(async ({ request, page}) => {
    await new TodoPage(page).clearTodosAndVisit(request);
});

test('should be able to add todos', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.addTodo('Buy Milk');
    await todoPage.expectTodos(['Buy Milk']);

    await todoPage.addTodo('Fed the cat');
    await todoPage.expectTodos(['Buy Milk', 'Fed the cat']);
});