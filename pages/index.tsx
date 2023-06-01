import Head from "next/head";
import { ArtistCardPage } from "../components/ArtistCardPage";

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
      <ArtistCardPage />
    </>
  );
}
