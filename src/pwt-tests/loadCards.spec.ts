import { test, expect } from '@playwright/test';

test.describe('Загрузка карточек с сервера', () => {
  test('корректная загрузка карточек с сервера', async ({ page }) => {
    await page.goto('http://localhost:5173');

    await page.waitForResponse((resp) => resp.url().includes('/six-cities/offers') && resp.status() === 200);

    await page.locator('.cities__card').first().waitFor();

    const cardElements = await page.locator('.cities__card').all();
    expect(cardElements.length).toBeGreaterThan(0);

    for (const element of cardElements) {
      const text = await element.innerText();
      expect(text).toContain('night');
      expect(text).toContain('To bookmarks');
      expect(text).toContain('Rating');

      const number = text.replace(/^\D+/g, '');
      const isNumber = !isNaN(parseInt(number, 10)) && isFinite(parseInt(number, 10));
      expect(isNumber).toBe(true);
    }
  });
});
