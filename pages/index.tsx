import Head from "next/head";

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
      <div
        style={{
          backgroundColor: "rgb(33, 33, 35)",
          color: "#fafafa",
          height: "100vh",
          padding: "1rem",
        }}
      ></div>
    </>
  );
}
