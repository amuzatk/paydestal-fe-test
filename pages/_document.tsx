import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
{/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/> */}
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"/>
       

{/* <link rel="stylesheet" href={process.env.GOOGLE_FONTS_URL} /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;