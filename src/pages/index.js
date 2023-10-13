import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';


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
        <Image src="/assets/game-icon.png" alt='Home screen image' width={400} height={240} style={{ marginTop: '100px' }}/>
            <Link href="/player" className={styles.customLink}>START</Link>
      </main>
    </>
  )
}
