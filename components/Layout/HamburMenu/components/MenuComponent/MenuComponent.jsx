/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
//styles
import styles from "./menuComponent.module.scss"

const MenuComponent = ({ showSidebar }) => {
  return (
    <nav className={styles.menu}>
      <div className={styles.menu__icon}>
        <img
          onClick={showSidebar}
          src="/assets/icons/close-icon.png"
          alt="hambur-icon"
        />
      </div>

      <ul>
        <li>
          <a href="#">Attend</a>
        </li>
        <li>
          <a href="#">Stats</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          <a href="#">Create</a>
        </li>
      </ul>
    </nav>
  )
}

export default MenuComponent
