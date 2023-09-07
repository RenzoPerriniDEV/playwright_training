import { Page, APIRequestContext, expect } from '@playwright/test';

const pageUrl = 'http://localhost:3000';
const apiUrl = 'http://localhost:3000/api';

export class TodoPage {
    constructor(private readonly page: Page) { }

    async clearTodos(request: APIRequestContext) {
        await request.put(`${apiUrl}/set-all`, { data: { items: []} });
    }

    async visit() {
        await this.page.goto(pageUrl);
    }

    async clearTodosAndVisit(request: APIRequestContext) {
        await this.clearTodos(request);
        await this.visit();
    }

    get newTodoInput() {
        return this.page.locator('.new-todo');
    }

    async addTodo(text: string) {
        await this.newTodoInput.type(text);
        await this.newTodoInput.press('Enter');
        await this.page.waitForResponse(/add/);
        await expect(this.newTodoInput).toHaveValue('');
    }

    async expectTodos(todos: string[]) {
        await expect(this.page.locator('.todo-list label')).toHaveText(todos);
    }
}