
test('Admin Login Test', async ({ page }) => {
    await login(page, 'https://chatgpt.com/', 'adminUser', 'adminPass', '#adminLogin');
});

test.each([
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
])('Login test for $username', async ({ page }, { username, password }) => {
    await login(page, 'https://chatgpt.com', username, password, '#loginButton');
});
