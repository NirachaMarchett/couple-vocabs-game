import React from "react";
import styles from "@/styles/AnswerCards.module.css";

export function AnswerCardsOne(){

    return(
        <>
        <div className={styles.answerCardsSection}>
            <div className="answerOne">
                <button>Hund</button>
            </div>
            <div className="answerTwo">
                <button>Herz</button>
            </div>
            <div className="answerThree">
                <button>Huhn</button>
            </div>
            <div className="answerFour">
                <button>Helm</button>
            </div>
        </div>
        </>
    )
}

export function AnswerCardsTwo(){

    return(
        <>
        <div className={styles.answerCardsSectionTwo}>
            <div className="answerOne">
                <button></button>
            </div>
            <div className="answerTwo">
                <button></button>
            </div>
            <div className="answerThree">
                <button></button>
            </div>
            <div className="answerFour">
                <button></button>
            </div>
        </div>
        </>
    )
}