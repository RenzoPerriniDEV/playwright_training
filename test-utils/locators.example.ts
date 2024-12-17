
import { test, expect } from '@playwright/test';

test('Locators', async({ page }) => {

    // Best practices
    await page
        .getByRole('listitem')
        .filter({ hasText: 'Product 2' })
        .getByRole('button', { name: 'Add to cart' })
        .click();

    // Localizador por texto
    let getStarted = page.locator('text=Get Started');
    // Alternative
    getStarted = page.locator('button', { hasText: 'Get Started' });
    
    //Css selector
    let button = page.locator('button.btn-primary');
    // By specific atribute
    const inputField = page.locator('input[name="username"]');

    //Xpath
    button = page.locator('//button[text()="Get Started"]');

    //Localizar por roles
    button = page.locator('role=button[name="Get Started"]');

    // Forma mas legible
    button = page.getByRole('button', { name: 'Get Started' });

    // Localizador por etiqueta
    let submitButton = page.locator('[data-testid="submit-btn"]');
    // Better
    submitButton = page.getByTestId('submit-btn');

    //Localizador de text parcial
    const partialText = page.locator('button', { hasText: 'Start' });

    // Ejemplo con varios selectores combinados:
    const secondButton = page.locator('button.btn-primary').nth(1);

    // Filter
    const buttonWithText = page.locator('button').filter({ hasText: 'Save' });

    // Localizador dentro de otro localizador:
    const section = page.locator('.section-class');
    button = section.locator('button', { hasText: 'Submit' });

    // Get by label
    let inputField2 = page.getByLabel('Username');

    // getByPlaceholder
    const inputField4 = page.getByPlaceholder('Enter your email');

    // getByText
    const link = page.getByText('Learn More');

    // getByTitle
    const icon = page.getByTitle('Settings');


    const product = page.getByRole('listitem').filter({ hasText: 'Product 2' });
});