//styles
import styles from "./header.module.scss"

//libraries
import Image from "next/image"

//components
import SearchBar from "../../SearchBar/SearchBar"

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/assets/images/PRAXU_logo.png"
        alt="logo praxu"
        width={200}
        height={28}
      />

      <div>
        <SearchBar />
      </div>

      <nav className={styles.header__menu}>
        <ul>
          <li>
            <a href="">Attend</a>
          </li>
          <li>
            <a href="">Stats</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
          <li>
            <a href="">Create</a>
          </li>
        </ul>
      </nav>
      <div className={styles.header__icons}>
        <img src="/assets/icons/wallet-icon.png" alt="wallet icon" />
        <img src="/assets/icons/user-icon.png" alt="user icon" />
      </div>
    </header>
  )
}

export default Header
