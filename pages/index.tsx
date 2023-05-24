import Head from "next/head";
import { Spotify_8Page } from "../components/Spotify_8Page";
import { AutoLayoutHorizontalPage } from "../components/AutoLayoutHorizontalPage";

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
      <AutoLayoutHorizontalPage />
    </>
  );
}
