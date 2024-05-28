import { test, expect } from '@playwright/test';

test.describe('Сортировка предложений по городу', () => {
  test('Filter card by city', async ({ page }) => {
    test.setTimeout(10000);
    await page.goto('http://localhost:5173');
    await page.waitForSelector('.cities__card'); // сортировка предложений по городу

    for (const li of await page.locator('.locations__item-link').all()) {
      await li.click();
      const currentCity = await li.textContent();

      await page.waitForSelector('.cities__card', {
        state: 'attached',
        timeout: 5000,
      });

      const choosenCity = (await page.locator('.places__found').textContent())?.split(' ').pop();

      expect(currentCity).toBe(choosenCity);
    }
  });
});
