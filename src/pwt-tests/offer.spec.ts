import { test, expect } from '@playwright/test';

test.describe('Навигация', () => {
  test.beforeEach(async ({ page }) => {
    // Загрузка главной страницы перед каждым тестом
    await page.goto('http://localhost:5173');
  });

  test('Следует перейти на страницу сведений о предложении при нажатии на карту', async ({ page }) => {
    // Ожидание появления карточек на странице
    await page.waitForSelector('.place-card');

    // Поиск ссылки по тексту (если возможно)
    const firstOfferLink = await page.$('a[href^="/offer/"]');

    expect(firstOfferLink).not.toBeNull();

    // Клик по найденной ссылке
    await firstOfferLink!.click();

    // Ожидание появления элемента на странице предложения
    await page.waitForSelector('.offer__host-title');

    const url = page.url();
    expect(url).toContain('/offer/');
  });
});
