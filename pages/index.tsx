import Head from "next/head";
import { XLeftMenuRow } from "../components/XLeftMenuRow";

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
      <div>
        <XLeftMenuRow />
        <XLeftMenuRow />
        <XLeftMenuRow />
        <XLeftMenuRow />
      </div>
    </>
  );
}
