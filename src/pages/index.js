import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import logoImage from "../../public/assets/game_icon-removebg-preview.svg";

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
        <img src={logoImage} alt="Logo" style={{ width: '100px', height: '100px' }}/>
            <Link href="/player" className={styles.customLink}>START</Link>
      </main>
    </>
  )
}
