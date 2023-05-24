import Head from "next/head";
import { Frame_92Page } from "../components/Frame_92Page";

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
      <Frame_92Page />
    </>
  );
}
