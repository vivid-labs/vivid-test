import Head from "next/head";
import { ProjectCardPage } from "../components/ProjectCardPage";

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
      <ProjectCardPage />
    </>
  );
}
