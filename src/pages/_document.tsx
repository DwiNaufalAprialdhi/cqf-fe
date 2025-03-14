import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Cinta Quran Foundation" />
        <meta name="description" content="Mewujudkan #IndonesiaCintaQuran" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:title" content="Cinta Quran Foundation" />
        <meta property="og:description" content="AMewujudkan #IndonesiaCintaQuran" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />

        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/" />
        <meta property="twitter:title" content="Cinta Quran Foundation" />
        <meta property="twitter:description" content="Mewujudkan #IndonesiaCintaQuran" />
        <meta property="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon-cqf-new.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
