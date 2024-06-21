import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly dontAllowButton: Locator;
  readonly loginLink: Locator;
  readonly mobileNumberInput: Locator;
  readonly verificationMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dontAllowButton = page.getByRole('button', { name: 'Don\'t Allow' });
    this.loginLink = page.getByRole('link', { name: 'Log in' });
    this.mobileNumberInput = page.frameLocator('#iframe-kp').getByPlaceholder('Enter Mobile Number');
    this.verificationMessage = page.frameLocator('#iframe-kp').locator('#login-wrapper');
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

  async clickLogin() {
    await this.loginLink.click();
  }

  async ValidMobileNumber(mobileNumber: number) {
    await this.mobileNumberInput.click();
    await this.mobileNumberInput.fill(mobileNumber.toString());
    await expect(this.verificationMessage).toContainText('We have sent verification code to');
  }
  async InvalidMobilenumber(mobileNumber: number){
    await this.mobileNumberInput.click();
    await this.mobileNumberInput.fill(mobileNumber.toString());
    await expect(this.verificationMessage).toContainText('Kindly enter a valid mobile number.');
  }

}
