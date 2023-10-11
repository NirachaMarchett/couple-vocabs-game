import styles from '@/styles/EditCardModal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";


export default function EditCardModal ({
    closeModal, 
    formData,
    handleInputChange, 
    handleFormSubmit
}) {
    return (
        <>
        <div>
            <form className={styles.form}>
                <button type="button" onClick={() => closeModal()}>
                    <FontAwesomeIcon icon={faCircleXmark} 
                    style={{color: "red", height: '40px', marginTop: '10px', marginBottom: '10px', position: 'absolute', right: '0px', top: '-20px'}}/>
                </button>
                <div className={styles.detailSection}>
                    <span className={styles.span}>{formData.id === "1" ? '🦊' : '🦓'}</span>
                    <label htmlFor="avatar"> Username:</label>
                    <input 
                        id="usernamePlayer" 
                        type="text" 
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        />

                    <label htmlFor="language">Practice language:</label>
                    <select 
                        name="language" 
                        id="languagePlayer"
                        value={formData.language}
                        onChange={handleInputChange}
                        >
                        <option value="">Select learning language</option>
                        <option value= "Thai">TH</option>
                        <option value= "German">DE</option>
                    </select>
                    <div className={styles.button}>
                        <button onClick={handleFormSubmit} >Save</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

