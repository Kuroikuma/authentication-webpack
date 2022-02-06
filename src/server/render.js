const render = (html) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App Web</title>
    <link rel="stylesheet" href="assets/css/app.css" type="text/css" />
  </head>
  <body>
    <div id="app">
    ${html}
    </div>
    <script src="assets/app.js" type="text/javascript"></script>
    <script src="assets/vendor.js" type="text/javascript"></script>
  </body>
  </html>`
}

export default render
