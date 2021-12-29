/* eslint-disable @next/next/no-img-element */
//styles
import styles from "./footer.module.scss"

//components
import SearchBar from "../../SearchBar/SearchBar"

const Footer = () => {
  return (
    <>
      <div className={styles.topBar}></div>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.footer__container__left}>
            <div className={styles.footer__container__left__text}>
              <h3>Praxu</h3>
              <p>
                Praxu is a marketplace for event tickets that is <br />
                giving creators the power to control their own tickets.
              </p>

              <small>©Praxu 2021. All rights reserved</small>
            </div>
          </div>
          <div className={styles.footer__container__social}>
            <div className={styles.footer__container__social__conter}>
              <span>Join email list</span>
              <SearchBar />
              <span>Connect with the community</span>
              <div className={styles.footer__container__social__conter__icons}>
                <ul>
                  <li>
                    <a href="">
                      <img
                        src="/assets/icons/instagram.png"
                        alt="instagram icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="/assets/icons/github.png" alt="github icon" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src="/assets/icons/whatsapp.png"
                        alt="whatsapp icon"
                      />
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
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
