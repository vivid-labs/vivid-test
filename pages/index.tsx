import Head from "next/head";
import { MacBookPro_16_1Page } from "../components/MacBookPro_16_1Page";

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
      <MacBookPro_16_1Page />
    </>
  );
}
