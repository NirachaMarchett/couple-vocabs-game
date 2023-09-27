import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div >
          <p>
            Welcome to
          </p>
          <h2>
            CoupleLingo
          </h2>
        </div>
        <div className={styles.styleButton}>
          <button>
            Start
          </button>
        </div>
      </main>
    </>
  )
}
