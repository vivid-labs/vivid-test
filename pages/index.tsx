import Head from "next/head";
import { DesktopClients_1Page } from "../components/DesktopClients_1Page";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vivid Test</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter"
        />
      </Head>
      <DesktopClients_1Page />
    </>
  );
}
