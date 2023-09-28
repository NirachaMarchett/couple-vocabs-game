import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <p>
            Welcome to
          </p>
          <h2>
            CoupleLingo
          </h2>
        </div>
            <Link href="/player" className={styles.customLink}>START</Link>
      </main>
    </>
  )
}
