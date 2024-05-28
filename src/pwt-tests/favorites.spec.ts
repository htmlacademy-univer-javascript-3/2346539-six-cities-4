import { test, expect } from '@playwright/test';

test.describe('Добавление в избранное', () => {
  test('Перенаправление на аутентификацию',
    async ({ page }) => {
      await page.goto('http://localhost:5173');

      await page.goto('http://localhost:5173/favorites');
      page.waitForURL('http://localhost:5173/login');
    });
  test('Избранное',
    async ({ page }) => {
      await page.goto('http://localhost:5173');

      await page.waitForSelector('.cities__card');
      await page.getByText('Sign in').click();

      await page.fill('input[name="email"]', 'mihail.nikanorenkov@yandex.ru');
      await page.fill('input[name="password"]', 'M5');
      await page.click('button[type="submit"]');

      const cardElement = page.locator('.cities').first();
      const aElement = cardElement.locator('a').first();
      const href = await aElement.getAttribute('href');
      const cardId = href ? href.split('/').pop() : '';
      await page.waitForTimeout(1000);
      const initialCount = await page.locator('.header__favorite-count').textContent() || 0;
      await page.locator('.cities__places-list').first().waitFor; // load cards
      const cardElements = await page.locator('.cities__places-list');
      await page.waitForTimeout(1000);

      await cardElements.first().click(); // click the first card
      await page.waitForTimeout(1000);
      const addToFavoritesButton = await page.locator('.offer__bookmark-button');
      await addToFavoritesButton.click();
      await page.waitForTimeout(1000);
    
      const count = await page.locator('.header__favorite-count').textContent() || 0;
      await page.waitForTimeout(1000);


    
      await page.goto('http://localhost:5173');

      await page.waitForSelector('.cities__card');
      await page.getByText('Sign in').click();

      await page.fill('input[name="email"]', 'mihail.nikanorenkov@yandex.ru');
      await page.fill('input[name="password"]', 'M5');
      await page.click('button[type="submit"]');

      const cardElementDel = page.locator('.cities').first();
      const aElementDel = cardElement.locator('a').first();
      const hrefDel = await aElement.getAttribute('href');
      const cardIdDel = href ? href.split('/').pop() : '';
      await page.waitForTimeout(1000);
      await page.locator('.cities__places-list').first().waitFor; // load cards
      const cardElementsDel = await page.locator('.cities__places-list');
      await page.waitForTimeout(1000);

      await cardElementsDel.first().click(); // click the first card
      await page.waitForTimeout(1000);
      const addToFavoritesButtonDel = await page.locator('.offer__bookmark-button');
      await addToFavoritesButtonDel.click();
      await page.waitForTimeout(1000);
    
      expect(Number(count)).toBe(Number(initialCount)+1);
    });
});
