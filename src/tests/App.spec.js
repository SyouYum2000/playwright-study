import { test, expect } from '@playwright/test';

test('sample',async({ page })=>{
    await page.goto('http://localhost:3000/');
    await expect(page).toHaveURL('http://localhost:3000/')
})