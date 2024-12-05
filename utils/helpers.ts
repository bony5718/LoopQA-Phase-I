import { expect, Page } from '@playwright/test';

/**
 * Logs in to the application using provided credentials.
 * @param page Playwright page object
 * @param email User email
 * @param password User password
 */

export async function login(page: Page, username: string, password: string) 
{
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

export async function verifyTask(page: Page, columnName: string, taskText: string, tags: string[]) 
{
  //const column = page.locator('div[class="flex flex-col w-80 bg-gray-50 rounded-lg p-4"]').filter({ hasText: columnName });
  const column = page.locator(`div:has-text("${columnName}")`);

  const task = column.locator(`div.bg-white:has-text("${taskText}")`);

  await expect(task).toContainText(taskText);

  for (const tag of tags) {
    await expect(task).toContainText(tag);
  }
}