const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('a[target="_blank"]')
]);
await newPage.bringToFront();
await newPage.click('button#submit');
