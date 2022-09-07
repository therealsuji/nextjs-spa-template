import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

function ClientSideRendering({ children }: any) {
  const [csrReady, setCsrReady] = useState(false);
  useEffect(() => {
    setCsrReady(true);
  }, []);
  return csrReady ? children : null;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClientSideRendering>
      <Component {...pageProps} />
    </ClientSideRendering>
  );
}

export default MyApp;
