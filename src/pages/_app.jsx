import Head from "next/head";
import "../styles/globals.css";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgColor } from "src/hooks/useBgColor";

const MyApp = ({ Component, pageProps }) => {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();

  <Head>
    <link rel="icon" href="/favicon.ico" />
  </Head>;
  return <Component {...pageProps} {...counter} {...inputArray} />;
};

export default MyApp;
