import styles from '@/styles/PlayerCard.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditCardModal from "../EditCardModal";
import Image from 'next/image';

export function PlayerCardOne ({
  playerOneData,
  formData,
  onEdit,
  openModal, 
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
         <Image src="/avatar/colabear_avatar.png" alt='avatar' width={120} height={100}/>
        </span>
      <div className={styles.cardDetailP1}>
          <p>Username: <strong>{playerOneData.username}</strong> </p>
          <p>Practice language: <strong>{playerOneData.language}</strong></p>
      </div>
      {openModal && (
        <EditCardModal
        closeModal={closeModal} 
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        />
      )}
      {openModal && <div className={styles.backDrop}></div>}
    </div>
    </>
 )   
}

export function PlayerCardTwo ({
  playerTwoData,
  formData,
  onEdit,
  openModal, 
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
        <Image src="/avatar/penguin_avatar.png" alt='avatar' width={120} height={100}/>
        </span>
      <div className={styles.cardDetailP2}>
          <p>Username: <strong>{playerTwoData.username}</strong> </p>
          <p>Practice language: <strong>{playerTwoData.language}</strong></p>
      </div>
      {openModal && (
        <EditCardModal
        closeModal={closeModal} 
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        />
      )}
      {openModal && <div className={styles.backDrop}></div>}
    </div>
    </>
 )   
}
