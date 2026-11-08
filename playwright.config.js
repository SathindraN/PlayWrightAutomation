import { defineConfig, devices } from '@playwright/test';
import { timeLog, trace } from 'node:console';


const config=({
  testDir: './tests',
  timeout: 100 * 1000,
  
  use: {
   browserName: 'chromium',
   headless: false,
   trace:'on',
    
   },
  
  });
export default config