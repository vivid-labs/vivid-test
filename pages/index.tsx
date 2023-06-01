import Head from "next/head";
import { TopProgramsPage } from "../components/TopProgramsPage";
import { SwitzerlandLandingPage } from "../components/SwitzerlandLandingPage";

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
      <SwitzerlandLandingPage />
    </>
  );
}
