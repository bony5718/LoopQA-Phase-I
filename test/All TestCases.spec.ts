import { test, expect } from '@playwright/test';
import { login, verifyTask} from '../utils/helpers';
import fs from 'fs';

// Load test data from JSON
const testData = JSON.parse(fs.readFileSync('./test-data/testData.json', 'utf-8'));

test.describe('Test Suite', () => 
{
  for (const { testName, username, password, navigation, columnName, taskText, tags } of testData)
  {   
    test(testName, async ({ page }) => 
    {
      // Step 1: Log in using provided credentials
      await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
      await login(page, username, password);

      // Step 2: Navigate to the specified section
      await page.click(`text=${navigation}`);
      await page.waitForSelector(`text=${columnName}`); // Ensure the column is visible

      // Step 3: Verify "Implement user authentication" is in the "To Do" column.
      // Step 4: Verify task tags
      await verifyTask(page, columnName, taskText, tags);
    
    });
  }
});
