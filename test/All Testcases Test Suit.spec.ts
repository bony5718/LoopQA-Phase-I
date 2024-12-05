import { test, expect } from '@playwright/test';
import { login, verifyTask, verifyMenu1, verifyMenu2} from '../utils/helpers';
import fs from 'fs';

// Load test data from JSON
const testData = JSON.parse(fs.readFileSync('./test-data/testData.json', 'utf-8'));

test.describe('Test Suite', () => 
{
for (const scenario of testData) 
{   
    test(scenario.testName, async ({ page }) => 
    {
    
    // Step 1: Log in using provided credentials
      await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
      await login(page, scenario.username, scenario.password);
    
    // Step 2: Navigate to "Web Application" OR "Mobile Application"
       if(scenario.menu1)
       {  
        await verifyMenu1(page, scenario.menu1);
       }

       if(scenario.menu2)
       {  
          await verifyMenu2(page, scenario.menu2);
       }

    // Step 3: Verify "Implement user authentication" is in the "To Do" column.
    // Step 4: Verify task tags
    await verifyTask(page, scenario.columnName, scenario.taskText, scenario.tags);
    
    });
}
})
