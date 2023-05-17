import Head from "next/head";
import { LandingPagePage } from "../components/LandingPagePage";
import { SerivicesHeadingSubheadingPage } from "../components/SerivicesHeadingSubheadingPage";
import { ServicesBlockPage } from "../components/ServicesBlockPage";

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
      <LandingPagePage />
      <SerivicesHeadingSubheadingPage />
      <ServicesBlockPage />
    </>
  );
}
