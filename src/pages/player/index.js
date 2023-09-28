import React from "react";
import { PlayerCardOne, PlayerCardTwo } from "../../../component/Card";
import Head from "next/head";
import { Inter } from 'next/font/google'
import styles from '@/styles/PlayerPage.module.css'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning, faStar, faArrowLeft  } from "@fortawesome/free-solid-svg-icons";

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
            <FontAwesomeIcon icon={faBoltLightning} style={{color: "#ffffff", height: '150px', marginTop: '10px', marginBottom: '10px'}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#ffffff", position: 'absolute', left: '175px', top: '420px', height: '25px'}} />
            <div className={styles.cardContainerEditP2}>
              <PlayerCardTwo/>
            </div>
            <button>PLAY</button>
            <Link href= "/" className={styles.backButtonLink}>
              <FontAwesomeIcon icon={faArrowLeft} style={{color: "#ffffff", marginRight: '5px'}}/> Back
            </Link>
        </main>
    </>
    )
}