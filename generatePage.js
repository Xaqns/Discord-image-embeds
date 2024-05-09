function generatePage() {
    var imageUrl = document.getElementById('image_url').value;
    var description = document.getElementById('description').value;

    var uniqueUrl = 'embedded_page_' + Date.now();

    var htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="${description}" property="og:description" />
        <meta content="${uniqueUrl}" property="og:url" />
        <meta content="${imageUrl}" property="og:image" />
        <title>Embedded Page</title>
    </head>
    <body>
        <h1>Embedded Page</h1>
        <img src="${imageUrl}" alt="Embedded Image">
        <p>${description}</p>
    </body>
    </html>`;

    var newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(htmlContent);
    newWindow.document.close();

    alert('Your embedded page has been created. You can access it at: ' + uniqueUrl);
}
