import { test, expect } from '@playwright/test';
import { SearchPage } from './pages/searchPage';
import users from './test-data/users.json';

test('search functionality', async ({page}) =>{
    const searchPage = new SearchPage(page);
    
    await searchPage.navigate();
    await searchPage.searchProducts(users.User.products);
    await searchPage.verifyResult();
});
