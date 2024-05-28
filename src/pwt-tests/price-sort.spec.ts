import { test, expect } from '@playwright/test';

test.describe('Сортировка', () => {
  test.beforeEach(async ({ page }) => {

    await page.goto('http://localhost:5173');
  });

  test('Сортировка по популярности', async ({ page }) => {

    await page.waitForSelector('.place-card');
    await page.click('.places__sorting-type');
    await page.click('text=Popular');
    await page.waitForTimeout(1000);
    const offers = await page.$$eval('.place-card__price-value', (elements) =>
      elements.map((el) => parseFloat(el.textContent?.replace('€', '') ?? '0'))
    );
    expect(offers.length).toBeGreaterThan(0);
  });

  test('Сортировка: low to high', async ({ page }) => {
    await page.waitForSelector('.place-card');
    await page.click('.places__sorting-type');
    await page.click('text=Price: low to high');
    await page.waitForTimeout(1000);
    const prices = await page.$$eval('.place-card__price-value', (elements) =>
      elements.map((el) => parseFloat(el.textContent?.replace('€', '') ?? '0'))
    );

    for (let i = 0; i < prices.length - 1; i++) {
      expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
    }
  });

  test('Сортировка: high to low', async ({ page }) => {
    await page.waitForSelector('.place-card');
    await page.click('.places__sorting-type');
    await page.click('text=Price: high to low');
    await page.waitForTimeout(1000);
    const prices = await page.$$eval('.place-card__price-value', (elements) =>
      elements.map((el) => parseFloat(el.textContent?.replace('€', '') ?? '0'))
    );

    for (let i = 0; i < prices.length - 1; i++) {
      expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
    }
  });

  test('Сортировка по рейтингу', async ({ page }) => {
    await page.waitForSelector('.place-card');
    await page.click('.places__sorting-type');
    await page.click('text=Top rated first');
    await page.waitForTimeout(1000);
    const ratings = await page.$$eval('.place-card__stars span[style*="width"]', (elements) =>
      elements.map((el) => parseFloat(el.style.width?.replace('%', '') ?? '0'))
    );

    for (let i = 0; i < ratings.length - 1; i++) {
      expect(ratings[i]).toBeGreaterThanOrEqual(ratings[i + 1]);
    }
  });
});
