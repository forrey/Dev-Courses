import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Global Title</title>
        <meta name="description" content="testing Next" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
