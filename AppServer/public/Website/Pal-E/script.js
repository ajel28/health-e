// Initialize the iframe once the page loads
window.onload = function() {
    const iframe = document.getElementById('bot-iframe');
  
    // Set the content of the iframe using srcdoc
    iframe.srcdoc = `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Webchat</title>
        </head>
        <body style="margin: 0; padding: 0; height: 100%; width: 100%;">
          <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
          <script defer>
            // Initialize the Botpress chat once the webchat is ready
            window.botpress.on("webchat:ready", (conversationId) => {
              botpress.open();
            });
  
            // Configure the bot
            window.botpress.init({
              "botId": "fd37dd4e-2da5-417f-852a-52e28880cfbb",
              "configuration": {
                "botName": "PAL-E",
                "botDescription": "Hi! I am PAL-E, and I am here to help you monitor your Physical Activity Level!",
                "website": {
                  "title": "health-e.org",
                  "link": "https://health-e.org"
                },
                "email": {
                  "title": "health-e.buisness@gmail.com",
                  "link": "mailto:health-e.buisness@gmail.com"
                },
                "phone": {},
                "termsOfService": {},
                "privacyPolicy": {},
                "color": "#ff6347",
                "variant": "solid",
                "themeMode": "dark",
                "fontFamily": "inter",
                "radius": 3,
                "allowFileUpload": true
              },
              "clientId": "f39ceb6e-35eb-4c47-bc59-42272b0aee89"
            });
          </script>
        </body>
      </html>
    `;
  };
  