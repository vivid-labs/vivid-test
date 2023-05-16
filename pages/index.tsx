import Head from "next/head";
import { TaskBoard_1600Page } from "../components/TaskBoard_1600Page";

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
      <TaskBoard_1600Page />
    </>
  );
}
