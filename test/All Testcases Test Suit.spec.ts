import { test, expect } from '@playwright/test';
import { login, verifyTask, verifyMenu1, verifyMenu2} from '../utils/helpers';
import fs from 'fs';

// Load test data from JSON
const testData = JSON.parse(fs.readFileSync('./test-data/testData.json', 'utf-8'));

test.describe('Test Suite', () => 
{
for (const scenario of testData) 
{   
    test(scenario.testCase1, async ({ page }) => 
    {
      if (scenario.url && scenario.username && scenario.password) 
      {
        await login(page, scenario.url, scenario.username, scenario.password);
      } 

      await verifyMenu1(page, scenario.menu1);

      // Verify task details in the specified column
        await verifyTask(page, scenario.columnName, scenario.taskText, scenario.tags);
    
    });

  test(scenario.testCase2, async ({ page }) => 
    {
        if (scenario.url && scenario.username && scenario.password) 
        {
        await login(page, scenario.url, scenario.username, scenario.password);
        } 
        
        await verifyMenu1(page, scenario.menu1);
    
        // Verify task details in the specified column
        await verifyTask(page, scenario.columnName, scenario.taskText, scenario.tags);
        
    });

  test(scenario.testCase3, async ({ page }) => 
    {
        if (scenario.url && scenario.username && scenario.password) {
           await login(page, scenario.url, scenario.username, scenario.password);
        } 
        
        await verifyMenu1(page, scenario.menu1);
        
        // Verify task details in the specified column
        await verifyTask(page, scenario.columnName, scenario.taskText, scenario.tags);
            
    });
  
    test(scenario.testCase4, async ({ page }) => 
    {
             
      if (scenario.url && scenario.username && scenario.password) {
        await login(page, scenario.url, scenario.username, scenario.password);
      } 
             
      await verifyMenu2(page, scenario.menu1);
             
        // Verify task details in the specified column
        await verifyTask(page, scenario.columnName, scenario.taskText, scenario.tags);
                 
    });

    test(scenario.testCase5, async ({ page }) => 
    {         
        if (scenario.url && scenario.username && scenario.password) {
            await login(page, scenario.url, scenario.username, scenario.password);
        } 
                 
        await verifyMenu2(page, scenario.menu1);
                 
        // Verify task details in the specified column
        await verifyTask(page, scenario.columnName, scenario.taskText, scenario.tags);
                     
    });
    
    test(scenario.testCase6, async ({ page }) => 
    {               
        if (scenario.url && scenario.username && scenario.password) {
            await login(page, scenario.url, scenario.username, scenario.password);
        } 
                     
        await verifyMenu2(page, scenario.menu1);
                     
        // Verify task details in the specified column
        await verifyTask(page, scenario.columnName, scenario.taskText, scenario.tags);                       
    });
  }
});