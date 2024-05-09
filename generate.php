<?php
$image_url = isset($_POST['image_url']) ? $_POST['image_url'] : '';
$description = isset($_POST['description']) ? $_POST['description'] : '';

$unique_url = uniqid();

$html_content = "<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <meta content=\"$description\" property=\"og:description\" />
    <meta content=\"$unique_url\" property=\"og:url\" />
    <meta content=\"$image_url\" property=\"og:image\" />
    <title>Embedded Page</title>
</head>
<body>
    <h1>Embedded Page</h1>
    <img src=\"$image_url\" alt=\"Embedded Image\">
    <p>$description</p>
</body>
</html>";

$file_path = "pages/$unique_url.html";
file_put_contents($file_path, $html_content);

echo "Your embedded page has been created. You can access it at: <a href=\"$file_path\">$file_path</a>";
?>
