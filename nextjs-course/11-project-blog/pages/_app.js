import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { NotificationContextProvider } from "../store/notification-context";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>My Blog</title>
          <meta name="description" content="My Amazing Blog" />
          <meta
            name="viewport"
            content="initial-scale-1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
