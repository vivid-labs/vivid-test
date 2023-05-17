import Head from "next/head";
import { Github_07Page } from "../components/Github_07Page";

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
      <Github_07Page />
    </>
  );
}
