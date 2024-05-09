const fs = require('fs');
const { execSync } = require('child_process');

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

    // Write HTML content to a new file
    fs.writeFileSync('embedded_page.html', htmlContent);

    // Deploy the new file to Vercel
    try {
        execSync('vercel --prod');
        alert('Your embedded page has been created and deployed. You can access it at: ' + uniqueUrl);
    } catch (error) {
        console.error('Error deploying to Vercel:', error);
        alert('There was an error deploying your page. Please try again later.');
    }
}
