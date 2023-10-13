import React from "react";
import { PlayerCardOne, PlayerCardTwo } from "../../../component/Card";
import Head from "next/head";
import { Inter } from 'next/font/google';
import styles from '@/styles/PlayerPage.module.css';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning, faStar, faArrowLeft  } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ['latin'] })

export default function PlayersPage ({
  onEdit, 
  openModalPlayer1, 
  openModalPlayer2,
  closeModal, 
  playerOneData, 
  playerTwoData, 
  formData, 
  handleInputChange, 
  handleFormSubmit
}){
    return (
    <>
        <Head>
            <title>Player page</title>
        </Head>
        <main className={`${styles.main} ${inter.className}`}>
          <div className={styles.cardContainerEditP1}>
            <PlayerCardOne
              onEdit={() => onEdit("1")} 
              playerOneData={playerOneData}
              formData={formData}
              openModalPlayer1={openModalPlayer1} 
              closeModal={closeModal} 
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </div>

          <FontAwesomeIcon icon={faBoltLightning} 
            style={{
              color: "#ffffff", 
              height: '150px', 
              marginTop: '10px', 
              marginBottom: '10px'
              }} />

          <div style={{position: 'relative'}}>
            <FontAwesomeIcon icon={faStar} 
              style={{
                color: "#ffffff", 
                position: 'absolute', 
                left: '-25px', 
                top: '15px', 
                height: '25px', 
                transform: 'translate(-50%, -50%'}} />
          </div>

          <div className={styles.cardContainerEditP2}>

          <div className={styles.cardContainerP2}>
            <PlayerCardTwo
              onEdit={() => onEdit("2")}
              playerTwoData={playerTwoData}
              formData={formData}
              openModalPlayer2={openModalPlayer2}
              closeModal={closeModal}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
            </div>
          </div>

          <Link href="/game" className={styles.gamePageLink}>PLAY</Link>
          <Link href= "/" className={styles.backButtonLink}>
            <FontAwesomeIcon icon={faArrowLeft} style={{color: "#ffffff", marginRight: '5px'}}/> Back
          </Link>
        </main>
    </>
    )
}