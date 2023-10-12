import styles from '@/styles/PlayerCard.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditCardModal from "../EditCardModal";
import Image from 'next/image';

export function PlayerCardOne ({
  playerOneData,
  formData,
  onEdit,
  openModalPlayer1, 
  closeModal,
  handleInputChange, 
  handleFormSubmit
}){

 return (
    <>
      <div className={styles.cardContainerP1}>
          <button type='button' onClick={() => onEdit("1")}>
            <FontAwesomeIcon icon={faPenToSquare}/>
          </button>

           <span>
            <Image src={playerOneData.avatar} alt='avatar' width={120} height={100}/>
           </span>

        <div className={styles.cardDetailP1}>
          <div className={styles.username1}>
            <p><strong>{playerOneData.username}</strong> </p>
          </div>
          <p>Learning: <strong>{playerOneData.language}</strong></p>
        </div>

        {openModalPlayer1 && (
        <EditCardModal
          closeModal={closeModal} 
          formData={formData}
          playerOneData={playerOneData}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
         />
        )}
        {openModalPlayer1 && <div className={styles.backDrop}></div>}
    </div>
    </>
 )   
}

export function PlayerCardTwo ({
  playerTwoData,
  formData,
  onEdit,
  openModalPlayer2, 
  closeModal,
  handleInputChange, 
  handleFormSubmit
}){

 return (
    <>
      <div className={styles.cardContainerP2}>
          <button type='button' onClick={() => onEdit("2")}>
            <FontAwesomeIcon icon={faPenToSquare}/>
          </button>

          <span>
            <Image src={playerTwoData.avatar} alt='avatar' width={120} height={100}/>
          </span>

          <div className={styles.cardDetailP2}>
            <div className={styles.username2}>
             <p><strong>{playerTwoData.username}</strong> </p>
            </div>
            <p>Learning: <strong>{playerTwoData.language}</strong></p>
          </div>
          {openModalPlayer2 && (
          <EditCardModal
            closeModal={closeModal} 
            formData={formData}
            playerTwoData={playerTwoData}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
          )}
          {openModalPlayer2 && <div className={styles.backDrop}></div>}
      </div>
    </>
 )   
}
