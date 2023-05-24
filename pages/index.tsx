import Head from "next/head";
import { Spotify_1Page } from "../components/Spotify_1Page";

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
      <Spotify_1Page />
    </>
  );
}
