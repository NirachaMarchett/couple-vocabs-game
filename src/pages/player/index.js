import React from "react";
import { PlayerCardOne, PlayerCardTwo } from "../../../component/Card";
import Head from "next/head";
import { Inter } from 'next/font/google'
import styles from '@/styles/PlayerPage.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function PlayersPage (){
    return (
    <>
        <Head>
            <title>Player page</title>
        </Head>
        <main className={`${styles.main} ${inter.className}`}>
            <div className={styles.cardContainerEditP1}>
              <PlayerCardOne/>
            </div>
            <h2>VS</h2>
            <div className={styles.cardContainerEditP2}>
              <PlayerCardTwo/>
            </div>
            <button>PLAY</button>
            <Link href= "/" className={styles.backButtonLink}>Back</Link>
        </main>
    </>
    )
}