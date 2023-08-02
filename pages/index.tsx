import Head from "next/head";
import { VividDashboard } from "../components/VividDashboard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vivid Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VividDashboard />
    </>
  );
}
