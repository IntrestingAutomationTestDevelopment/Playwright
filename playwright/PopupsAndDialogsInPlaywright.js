async function acceptAlert(){
page.on('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept(); // Accept the dialog
});
}
async function acceptDialogtypeInput(){
page.on('dialog', async dialog => {
  await dialog.accept('Input text');
});

}