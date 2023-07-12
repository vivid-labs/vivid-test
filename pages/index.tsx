import Head from "next/head";
import { ButtonPage } from "../components/ButtonPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vivid Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          backgroundColor: "rgb(33, 33, 35)",
          color: "#fafafa",
          height: "100vh",
          padding: "1rem",
        }}
      >
        <ButtonPage />
      </div>
    </>
  );
}
