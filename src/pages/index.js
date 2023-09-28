import React from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import GameIcon from '../../public/assets/game-icon.png';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.welcomeText}>
          <p>
            Welcome to
          </p>
          <h2>
            PairLingo
          </h2>
        </div>
        <img src={GameIcon} alt='Home screen image' style={{ width: '200px', height: '200px', marginTop: '100px' }}/>
            <Link href="/player" className={styles.customLink}>START</Link>
      </main>
    </>
  )
}
