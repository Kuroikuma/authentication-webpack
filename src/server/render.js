const render = (html) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login kuroChat</title>
    <link rel="stylesheet" href="/assets/css/app.css" type="text/css" />
  </head>
  <style>
    @import url('https://fonts.googleapis.com/css?family=Noto Sans');
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
  </style>
  <body>
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          appId            : '3065376023721867',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v13.0'
        });
      };
    </script>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
    <div id="app">${html}</div>
    <script src="/assets/app.js" type="text/javascript"></script>
    <script src="/assets/vendor.js" type="text/javascript"></script>
  </body>
  </html>`
}

export default render
