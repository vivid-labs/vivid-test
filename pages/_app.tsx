import type { AppProps } from "next/app";

import "../globals.css";
import "../fonts.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
