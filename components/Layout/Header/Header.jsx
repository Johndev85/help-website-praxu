/* eslint-disable @next/next/no-img-element */
//styles
import styles from "./header.module.scss"

//libraries
import Image from "next/image"

//components
import SearchBar from "../../SearchBar/SearchBar"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Image
          src="/assets/images/PRAXU_logo.png"
          alt="logo praxu"
          width={200}
          height={28}
        />

        <div>
          <SearchBar />
        </div>

        <nav className={styles.header__container__menu}>
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
        <div className={styles.header__container__icons}>
          <a href="#">
            <img src="/assets/icons/wallet-icon.png" alt="wallet icon" />
          </a>
          <a href="#">
            <img src="/assets/icons/user-icon.png" alt="user icon" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
