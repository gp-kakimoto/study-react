import Head from "next/head";
import "../styles/globals.css";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

function MyApp({ Component, pageProps }) {
  //const { count, isShow, handleClick, handleDisplay } = useCounter();
  const counter = useCounter();
  //const { text, array, handleChange, handleAdd } = useInputArray();
  const inputArray = useInputArray();
  useBgLightBlue();

  <Head>
    <link rel="icon" href="/favicon.ico" />
  </Head>;
  return <Component {...pageProps} {...counter} {...inputArray} />;
}

export default MyApp;
