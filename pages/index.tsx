import Head from "next/head";
import { LineTestsPage } from "../components/LineTestsPage";

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
      <LineTestsPage />
    </>
  );
}
