import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <title>Light Detail Studio</title>
          <meta
            name="description"
            content="Light Details's mission is to design and implement functionally-aesthetically balanced spaces tailored to the client's personality traits."
          ></meta>
          <meta
            name="keywords"
            content="interior design, cluj-napoca, romania, 3d visualizations, randari, design interior"
          ></meta>
          <meta property="og:title" content="Light Detail Studio"></meta>
          <meta
            property="og:description"
            content="Light Details's mission is to design and implement functionally-aesthetically balanced spaces tailored to the client's personality traits."
          ></meta>
          <meta
            property="og:image"
            content="https://lightdetail.eu/img/residential.jpg"
          />
          <meta property="og:url" content="https://lightdetail.eu" />
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
