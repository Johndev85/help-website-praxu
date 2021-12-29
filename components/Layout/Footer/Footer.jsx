/* eslint-disable @next/next/no-img-element */
//styles
import styles from "./footer.module.scss"

//components
import SearchBar from "../../SearchBar/SearchBar"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__text}>
        <h3>Praxy</h3>
        <p>
          Praxu is a marketplace for event tickets that is giving creators the
          power to control their own tickets
        </p>

        <small>©Praxu 2021. All rights reserved</small>
      </div>
      <div className={styles.footer__social}>
        <span>Join email list</span>
        <SearchBar />
        <span>Connect with the community</span>
        <div className={styles.footer__social__icons}>
          <ul>
            <li>
              <a href="">
                <img src="/assets/icons/instagram.png" alt="instagram icon" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/assets/icons/github.png" alt="github icon" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/assets/icons/whatsapp.png" alt="whatsapp icon" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/assets/icons/discord.png" alt="discord icon" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/assets/icons/reddit.png" alt="reddit icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
