import { test, expect } from '@playwright/test';

let sharedData: string;

test.beforeAll(async () => {
  console.log('Setup before all tests');
  sharedData = 'Test Data';
});

test.afterAll(async () => {
  console.log('Cleanup after all tests');
  sharedData = '';
});

test('Test 1 - Using shared data', async ({ page }) => {
  console.log('Running Test 1');
  expect(sharedData).toBe('Test Data');
});

test('Test 2 - Another test', async ({ page }) => {
  console.log('Running Test 2');
  expect(sharedData).toBe('Test Data');
});
