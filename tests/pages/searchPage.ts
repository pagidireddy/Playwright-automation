import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class SearchPage{
    readonly page :Page;
    readonly dontAllowButton: Locator;
    readonly search: Locator;
    readonly verifyResults: Locator;

    constructor(page: Page){
        this.page = page;
        this.dontAllowButton = page.getByRole('button', { name: 'Don\'t Allow' });
        this.search = page.getByRole('textbox', { name: 'Search Shirts, Trousers...' });
        this.verifyResults = page.getByRole('heading', { name: 'Showing Results For:' })

    }
    async navigate() {
        await this.page.goto('https://thehouseofrare.com/');
      }
    
      async dismissNotificationIfPresent() {
        await expect(this.dontAllowButton).toBeVisible({timeout:10000});
        try {
          if (await this.dontAllowButton.isVisible({timeout:10000})) {
            await this.dontAllowButton.click();
          }
        } catch (e) {
          console.log('Notification not present');
        }
      }
    
    async searchProducts(products: string){
        await   this.search.click()
        await   this.search.fill(products);
        await   this.search.press('Enter');
    }

    async verifyResult(){
        await expect(this.verifyResults).toBeVisible();
    }
}