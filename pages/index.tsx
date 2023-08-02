import Head from "next/head";
import { Content } from "../components/Content";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vivid Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content />
    </>
  );
}
