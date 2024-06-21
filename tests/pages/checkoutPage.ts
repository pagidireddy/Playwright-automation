import { Page, Locator } from "playwright";
import { SearchPage } from "./searchPage";
import { expect } from "playwright/test";

export class checkOut{
    readonly page : Page;
    readonly product : Locator;
    readonly size : Locator;
    readonly addcart : Locator;
    readonly buy : Locator;
    readonly verifyBuy : Locator;
    readonly frame : Locator;
    products: any;

    constructor(page: Page){
        this.page = page
        this.product = page.locator('#argoid-product-0');
        this.size = page.getByText('XS-36', {exact: true});
        this.addcart = page.getByRole('button', { name: 'Add to cart' });
        this.buy = page.getByText('BUY NOW RS.');
        this.frame = page.frameLocator('#headless-iframe').getByText('Order summary');
        this.verifyBuy = page.frameLocator('#headless-iframe').getByText('Securely complete the');
    }

    async navigate(){
        const search = new SearchPage(this.page)
        
        this.page.goto('https://thehouseofrare.com/');
        await search.dismissNotificationIfPresent();
    };

    async openproduct(products: string){
        const search = new SearchPage(this.page);

        await search.searchProducts(products);
        await this.product.click();        
    };
    
    async addtocart(){
        await this.size.click();
        await this.addcart.click();
    };

    async buytheproduct(){
        await this.buy.click();
    };

    async verifyCheckout(){
        await expect(this.frame).toBeVisible({timeout: 10000});
        await expect(this.verifyBuy).toBeVisible({timeout: 10000});
    };
};