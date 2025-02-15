
page.on('dialog', async (dialog) => {
    console.log(dialog.message());
    await dialog.accept();
});
 //test user interactions reusable functions in playwright javascript