/* eslint-disable @next/next/no-img-element */
//styles
import styles from "./cardArticles.module.scss"

const CardArticles = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__titles}>
        <img src="/assets/icons/note-icon.png" alt="note icon" />
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default CardArticles
