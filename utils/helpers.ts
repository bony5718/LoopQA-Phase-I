import { expect, Page } from '@playwright/test';

/**
 * Logs in to the application using provided credentials.
 * @param page Playwright page object
 * @param email User email
 * @param password User password
 */

export async function login(page: Page,url:string, username: string, password: string) 
{
  await page.goto(url);
  await page.fill('input[id="username"]', username);
  await page.fill('input[id="password"]', password);
  await page.click('button[type="submit"]');
}

/**
 * Verifies a task in a specific column.
 * @param page Playwright page object
 * @param columnName Name of the column
 * @param taskText Task text to verify
 * @param tags Tags to verify
 */

export async function verifyMenu1(page: Page, menu1: string) 
{
  await expect(page.getByRole('heading', { name:menu1 , level: 2})).toBeVisible();
  await page.getByRole('heading', { name: menu1, level: 2}).click();
}

export async function verifyMenu2(page: Page, menu2: string) 
{
  await expect(page.getByRole('heading', { name:menu2 , level: 1})).toBeVisible();
  await page.getByRole('heading', { name: menu2, level: 1}).click();
}

export async function verifyTask(page: Page, columnName: string, taskText: string, tags: string[]) 
{
  const column = page.locator('div[class="flex flex-col w-80 bg-gray-50 rounded-lg p-4"]').filter({ hasText: columnName });
  const task = column.locator(`div.bg-white:has-text("${taskText}")`);
  await expect(task).toContainText(taskText);

  for (const tag of tags) {
    await expect(task).toContainText(tag);
  }
}