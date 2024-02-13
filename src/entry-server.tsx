import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" as="image" href="/img/cover.jpg"></link>
          <link rel="preload" as="image" href="/img/about-us-cover.jpg"></link>
          <link rel="preload" as="image" href="/img/residential.jpg"></link>
          <link rel="preload" as="image" href="/img/visualisation1.jpg"></link>
          <link rel="preload" as="image" href="/img/services.png"></link>
          <link rel="preload" as="image" href="/img/contact.jpg"></link>
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
