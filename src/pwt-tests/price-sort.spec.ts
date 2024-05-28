import { test, expect } from '@playwright/test';

test.describe('Сортировка предложений', () => {

  test('Сортировка по повышению цен', async ({page}) => {
    await page.goto('http://localhost:5173');
    await page.waitForSelector('.cities__card');

    await page.locator('p').filter({ hasText: 'Popular' }).click();
    const options = await page.locator('.places__option').all();
    await options[1].click();

    await page.waitForSelector('.places__found', { state: 'attached' });
    await page.waitForSelector('.cities__card', { state: 'attached' });

    const cardElements = await page.locator('.cities__card').all();
    expect(cardElements.length).toBeGreaterThan(0);

    const pricesLocators = await page.locator('.place-card__info .place-card__price-value').all();

    const prices = await Promise.all(pricesLocators.map(async (locator) => {
      const text = await locator.innerText();
      return parseInt(text.replace(/^\D+/g, ''), 10);
    }));

    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sortedPrices);
  });

  test('Сортировка по понижению цен', async ({page}) => {
    await page.goto('http://localhost:5173');
    await page.waitForSelector('.cities__card');

    await page.locator('p').filter({ hasText: 'Popular' }).click();
    const options = await page.locator('.places__option').all();
    await options[2].click();

    await page.waitForSelector('.places__found', { state: 'attached' });
    await page.waitForSelector('.cities__card', { state: 'attached' });

    const cardElements = await page.locator('.cities__card').all();
    expect(cardElements.length).toBeGreaterThan(0);

    const pricesLocators = await page.locator('.place-card__info .place-card__price-value').all();

    const prices = await Promise.all(pricesLocators.map(async (locator) => {
      const text = await locator.innerText();
      return parseInt(text.replace(/^\D+/g, ''), 10);
    })); // get all offers prices

    const sortedPrices = [...prices].sort((a, b) => b - a); // sort prices high to low
    expect(prices).toEqual(sortedPrices);
  });

  test('Сортировка по понижению рейтинга', async ({page}) => {
    await page.goto('http://localhost:5173');
    await page.waitForSelector('.cities__card');

    await page.locator('p').filter({ hasText: 'Popular' }).click();
    const options = await page.locator('.places__option').all();
    await options[3].click();

    await page.waitForSelector('.places__found', { state: 'attached' });
    await page.waitForSelector('.cities__card', { state: 'attached' });

    const cardElements = await page.locator('.cities__card').all();
    expect(cardElements.length).toBeGreaterThan(0);

    const ratingsLocators = await page.locator('.place-card__rating').all();

    const ratings = await Promise.all(ratingsLocators.map(async (locator) => {
      const rating = await locator.getAttribute('data-test');
      return parseFloat(String(rating).replace(/^\D+/g, '') ?? '0');
    })); // get all offers ratings

    const sortedRatings = [...ratings].sort((a, b) => b - a);
    expect(ratings).toEqual(sortedRatings);
  });
});
