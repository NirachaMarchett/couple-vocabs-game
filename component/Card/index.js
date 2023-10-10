import styles from '@/styles/PlayerCard.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditCardModal from '../EditCardModal';

export function PlayerCardOne ({onEdit, openModal, closeModal, playerOneData, formData, handleInputChange, handleFormSubmit}){
 return (
    <>
      <div className={styles.cardContainerP1}>
        <button type='button' onClick={() => onEdit()}>
          <FontAwesomeIcon icon={faPenToSquare}/>
        </button>
        <span>🦊</span>
      <div className={styles.cardDetailP1}>
          <p>Username: <strong>{playerOneData.username}</strong> </p>
          <p>Practice language: <strong>{playerOneData.language}</strong></p>
      </div>
      {openModal && (
        <EditCardModal closeModal={closeModal} 
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

export function PlayerCardTwo ({onEdit, openModal, closeModal, playerTwoData, formData, handleInputChange, handleFormSubmit}){

    return (
      <>
       <div className={styles.cardContainerP2}>
         <button type='button'onClick={() => onEdit()}>
          <FontAwesomeIcon icon={faPenToSquare}/>
          </button>
          <span>🦓</span>
        <div className={styles.cardDetailP2}>
            <p>Username: <strong>{playerTwoData.username}</strong> </p>
            <p>Practice language: <strong>{playerTwoData.language}</strong></p>
        </div>
        {openModal && (
          <EditCardModal closeModal={closeModal} 
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