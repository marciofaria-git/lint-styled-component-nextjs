import GlobalStyles from "@/styles/global";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    //Pass the GlobalStyles for the entire aplication
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
