import styles from '@/styles/PlayerCard.module.css'

export function PlayerCardOne (){

 return (
    <>
    <div className={styles.cardContainerP1}>
          <h3>🦊</h3>
          <div className={styles.cardDetailP1}>
            <p>Username: <strong>PlayerOne</strong> </p>
            <p>Practice language: <strong>DE</strong></p>
          </div>
          
    </div>
    </>
 )   
}

export function PlayerCardTwo (){

    return (
       <>
       <div className={styles.cardContainerP2}>
             <h3>🦓</h3>
             <div className={styles.cardDetailP2}>
               <p>Username: <strong>PlayerTwo</strong> </p>
               <p>Practice language: <strong>TH</strong></p>
             </div>
             
       </div>
       </>
    )   
   }