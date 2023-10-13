import React from "react";
import Head from 'next/head';
import styles from "@/styles/gamePage.module.css";
import { Inter } from 'next/font/google';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faArrowRotateLeft} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Link from "next/link";
import {AnswerCardsOne, AnswerCardsTwo} from "../../../component/answerCard";


const inter = Inter({ subsets: ['latin'] })

export default function GamePage ({
    playerOneData, 
    playerTwoData, 
}){

    return (
        <>
        <Head>
            <title>Player page</title>
        </Head>
        <div className={`${styles.main} ${inter.className}`}>
            <div className={styles.playerStatOne}>
                <div className={styles.playerOneLives}>
                <FontAwesomeIcon icon={faHeart} style={{color: "#F0A35C",  height: "45px"}} />
                <FontAwesomeIcon icon={faHeart} style={{color: "#F0A35C", height: "45px"}} />
                <FontAwesomeIcon icon={faHeart} style={{color: "#F0A35C", height: "45px"}} />
                <FontAwesomeIcon icon={faHeart} style={{color: "#F0A35C", height: "45px"}} />
                <FontAwesomeIcon icon={faHeart} style={{color: "#F0A35C", height: "45px"}} />
                </div>

                <div className={styles.playerOneAvatar}>
                    <span>
                        <Image src={playerOneData.avatar} alt='avatar'width={120} height={100}/>
                    </span>
                    <p><strong>{playerOneData.username}</strong> </p>
                </div>
            </div>

            <AnswerCardsTwo/>
            
            <div className={styles.flashCard}>
                <div className={styles.englishVocabOne}>
                    <p>Chicken</p>
                </div>
                <hr></hr>
                <div className={styles.englishVocabTwo}>
                    <p>Chicken</p>
                </div>

                <div className={styles.restartButton}>
                    <button><FontAwesomeIcon icon={faArrowRotateLeft} style={{color: "#ffffff", height: "25px"}} /></button>
                </div>
                
                <Link href="/player" className={styles.finishButton}>End Game</Link>
            </div>

            <AnswerCardsOne/>

            <div className={styles.playerStatTwo}>
                <div className={styles.playerTwoLives}>
                <FontAwesomeIcon icon={faHeart} style={{color: "#2FFDB3",  height: "45px"}} />
                <FontAwesomeIcon icon={faHeart} style={{color: "#2FFDB3", height: "45px"}} />
                <FontAwesomeIcon icon={faHeart} style={{color: "#2FFDB3", height: "45px"}} />
                <FontAwesomeIcon icon={faHeart} style={{color: "#2FFDB3", height: "45px"}} />
                <FontAwesomeIcon icon={faHeart} style={{color: "#2FFDB3", height: "45px"}} />
                </div>

                <div className={styles.playerTwoAvatar}>
                    <span>
                        <Image src={playerTwoData.avatar} alt='avatar'width={120} height={100}/>
                    </span>
                    <p><strong>{playerTwoData.username}</strong> </p>
                </div>
            </div>

        </div>
        </>
    )
}