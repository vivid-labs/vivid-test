import Head from "next/head";
import { StatusSuccess } from "../components/StatusSuccess";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vivid Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StatusSuccess />
    </>
  );
}
