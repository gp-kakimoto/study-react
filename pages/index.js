import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Footer} from '../components/Footer'
import { Links } from '../components/links'
import Headline from '../components/Headline'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
         <Headline page="index"/>
        <Links />
      </main>
      <Footer />
    </div>
  )
}
