//styles
import styles from "./cardInformation.module.scss"

const CardInformation = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default CardInformation
