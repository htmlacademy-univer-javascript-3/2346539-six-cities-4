import { test, expect } from '@playwright/test';

test('Валидная авторизация', async ({ page }) => {
  test.setTimeout(10000);
  await page.goto('http://localhost:5173/login');

  // Валидная попытка входа
  await page.fill('input[name="email"]', 'mihail.nikanorenkov@yandex.ru');
  await page.fill('input[name="password"]', 'M5');


  // Проверка, что пользователь был перенаправлен на главную страницу
  await Promise.all([
    page.waitForURL('http://localhost:5173'),
    page.click('button[type="submit"]'),
  ]);
  await expect(page).toHaveURL('http://localhost:5173');
});

test('Невалидная авторизация', async ({ page }) => {
  test.setTimeout(10000);
  await page.goto('http://localhost:5173/login');

  // Валидная попытка входа
  await page.fill('input[name="email"]', 'mihail.nikanorenkov@yandex.ru');
  await page.fill('input[name="password"]', 'invalid');

  // Проверка, что пользователь получил сообщение об ошибке
  await page.click('button[type="submit"]');
  await page.isVisible('text="Something went wrong, check the requirements and try again later."');
  await expect(page).toHaveURL('http://localhost:5173/login');
  expect(page.url()).toBe('http://localhost:5173/login');
});

