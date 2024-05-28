import { test, expect } from '@playwright/test';

test.describe('Go to Offer', () => {
  test('should redirect to offer page when card is clicked', async ({ page }) => {
    await page.goto('http://localhost:5173'); // load page

    await page.locator('.cities').first().waitFor(); // load cards
    const cardElement = await page.locator('.cities').first();

    // get first card's id
    const aElement = await cardElement.locator('a').first();
    const href = await aElement.getAttribute('href');
    const cardId = href ? href.split('/').pop() : '';

    // get first card's name
    const cardNameElement = await cardElement.locator('.place-card__name a').first();
    const cardName = await cardNameElement.evaluate((el) => el.textContent?.trim());

    //get first card's price
    const cardPriceElement = await cardElement.locator('.place-card__price-value').first();
    const cardPrice = await cardPriceElement.evaluate((el) => el.textContent?.trim());

    await cardElement.click(); // click the first card

    // wait for server response
    await page.waitForResponse((resp) => resp.url().includes(`/six-cities/offers/${ cardId}`) && resp.status() === 200);
    page.waitForURL(`http://localhost:5173/offer/${ cardId}`); // wait for new page to load

    // check if offer's name and price match card's
    const offerNameElement = await page.locator('.offer__name').first();
    const offerName = await offerNameElement.evaluate((el) => el.textContent?.trim());

    const offerPriceElement = await page.locator('.offer__price-value').first();
    const offerPrice = await offerPriceElement.evaluate((el) => el.textContent?.trim());

    expect(offerName).toBe(cardName);
    expect(offerPrice).toBe(cardPrice);
  });
});
