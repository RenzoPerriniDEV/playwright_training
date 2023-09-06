import { test, expect } from '@playwright/test'

test.skip('should be able to clear all the items', async ({ request }) => { 
    const setRespone = await request.put('http://localhost:3000/api/set-all', {
        data: {
            items: []
        }
    });
    expect(setRespone.ok()).toBeTruthy;
    expect(setRespone.ok()).toBe(200);
    expect(await setRespone.json()).toEqual({ status: 'success' });

    const getRespone = await request.get('http://localhost:3000/api/get-all');
    expect(setRespone.ok()).toBeTruthy;
    expect(setRespone.ok()).toBe(200);
    expect(await getRespone.json()).toEqual({ items: [] });
})