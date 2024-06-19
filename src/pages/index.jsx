import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import {Footer} from 'src/components/Footer'
import {Main} from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useCallback } from 'react'

//const handleClick = (e, foo) => {
//  console,log(e.target.href);
//  e.preventDefault();
//  alert(foo);
// };

export default function Home() {

  const foo = 1;
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  },[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Next App</title>
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>

    {/*  <a href ="/about" onClick={(e) => {
        handleClick(e,foo)
      }}>
        ボタン
      </a> */}
    
      <Main page="index" />
      <Footer />
    </div>
  )
}