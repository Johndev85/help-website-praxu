/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
//styles
import styles from "./hamburMenu.module.scss"

//libraries
import { useState } from "react"
import Link from "next/link"

//components
import MenuComponent from "./components/MenuComponent/MenuComponent"

const HamburMenu = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className={styles.hamburMenu}>
      <Link href="#">
        <img
          onClick={showSidebar}
          src="/assets/icons/hambur-icon.png"
          alt="hambur-icon"
        />
      </Link>
      {sidebar ? <MenuComponent showSidebar={showSidebar} /> : null}
    </div>
  )
}

export default HamburMenu
