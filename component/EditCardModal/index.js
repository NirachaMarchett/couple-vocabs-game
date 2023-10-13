import styles from '@/styles/EditCardModal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";


export default function EditCardModal ({
    closeModal, 
    formData,
    handleInputChange, 
    handleFormSubmit,
}) {

const avatarOptions = [
'/avatar/colabear_avatar.png',
'/avatar/dear_avatar.png',
'/avatar/horse_avatar.png',
'/avatar/lion_avatar.png',
'/avatar/penguin_avatar.png',
'/avatar/pig_avatar.png',
'/avatar/rabbit_avatar.png',
'/avatar/crocodile_avatar.png',
'/avatar/tiger_avatar.png',
];

return (
  <>
    <div>
      <form className={styles.form}>
        <button type="button" onClick={() => closeModal()}>
          <FontAwesomeIcon icon={faCircleXmark} 
            style={{
             color: "red", 
             height: '40px', 
             marginTop: '10px', 
             marginBottom: '10px', 
             position: 'absolute', 
             right: '0px', 
             top: '-20px'}}/>
        </button>
                
        <div className={styles.avatar}>
          <span>
            <img src={formData.avatar} alt="Avatar"/>
          </span>

          <div className={styles.avatarOptions}>
            {avatarOptions.map((avatar, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name="avatar"
                value={avatar} 
                checked={formData.avatar === avatar}
                onChange={handleInputChange}
              />
              <img src={avatar}/>
            </label>
            ))}
          </div>          
        </div>

        <div className={styles.detailSection}>
         <label htmlFor="username"> Username:</label>
          <input 
            id="usernamePlayer" 
            type="text" 
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />

         <label htmlFor="language">Learning:</label>
          <select 
            name="language" 
            id="languagePlayer"
            value={formData.language}
            onChange={handleInputChange}
            >
            <option value= "Thai">Thai</option>
            <option value= "German">German</option>
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

