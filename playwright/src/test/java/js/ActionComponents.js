//loginPage
async function login(page, url, username, password, loginButtonSelector) {
    await page.goto(url);
    await page.fill('#username', username);
    await page.fill('#password', password);
    await page.click(loginButtonSelector);
    await page.waitForNavigation();
}

async function dragAndDrop() {
	await page.mouse.move(100, 200);
	await page.mouse.down(); // Click and hold
	await page.mouse.move(300, 400); // Drag to new position
	await page.mouse.up(); // Release mouse button

}

async function mouseHover() {
	await page.mouse.move(400, 500);
}
async function doubleClick() {
	await page.mouse.dblclick(150, 250);

}
async function rightClick() {
	await page.mouse.click(100, 200, { button: 'right' });

}

async function click() {
	await page.mouse.click(200, 300);

}
//test
async function shiftClickAtCoordinatesReleaseShift() {
	await page.keyboard.down('Shift');
	await page.mouse.click(150, 250);
	await page.keyboard.up('Shift');

}

async function DraggingAndDropping() {

await page.mouse.move(100, 200);
await page.mouse.down(); // Click and hold
await page.mouse.move(300, 400); // Drag to new position
await page.mouse.up(); // Release mouse button

}
//selectAllTextCopyAndPaste
//typing with key modifiers
async function selectAllCopyAndPaste(){
	await page.keyboard.press('Control+A'); // Select all text
	await page.keyboard.press('Control+C'); // Copy
	await page.keyboard.press('Control+V'); // Paste
}
//holding down a key
async function holdingDownAKey(){
	await page.keyboard.down('Shift');
	await page.keyboard.type('playwright'); // Will type in uppercase
	await page.keyboard.up('Shift');

}
async function pressEnterPressTab(){
	await page.keyboard.press('Enter');
	await page.keyboard.press('Tab');

}
