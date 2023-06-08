import Head from "next/head";

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
        <div className="border-blue-500 bg-red-300 border-8 w-16 h-16">div</div>
      </div>
    </>
  );
}
