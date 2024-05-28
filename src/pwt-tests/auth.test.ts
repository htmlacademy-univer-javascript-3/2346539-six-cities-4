import { test, expect } from '@playwright/test';
 
test('Валидность авторизации', async ({ page }) => {
  test.setTimeout(5000); // Устанавливает таймаут 60 секунд для этого теста
 
  await page.goto('http://localhost:5173/login');
 
  // Невалидная попытка входа
  await page.fill('input[name="email"]', 'mihail.nikanorenkov@yandex.ru');
  await page.fill('input[name="password"]', 'неvalid');
  await page.click('button[type="submit"]');
 
  // Проверка, что отображается сообщение об ошибке
  await expect(page).toHaveURL('http://localhost:5173/login');
  await expect(page.locator('text="Something went wrong, check the requirements and try again later."')).toBeVisible();
 
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
