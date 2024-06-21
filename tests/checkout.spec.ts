import { test} from '@playwright/test';
import { checkOut } from './pages/checkoutPage';
import users from './test-data/users.json'

test('product page', async ({ page }) => {
  test.slow()
  const check = new checkOut(page);

  await check.navigate();
  await check.openproduct(users.User.products);
  await check.addtocart();
  await check.buytheproduct();
  await check.verifyCheckout();
});