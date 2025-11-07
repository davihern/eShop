import { test, expect } from '@playwright/test';

test('Hidden Page Shows Hello World', async ({ page }) => {
  await page.goto('/hidden');

  await expect(page.getByRole('heading', { name: 'Hello World' })).toBeVisible();
});
