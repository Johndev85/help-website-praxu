//styles
import styles from "./searchBar.module.scss"

//libraries
import Image from "next/image"

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search tickets, hosts and people" />
      <Image
        className={styles.container_searchIcon}
        src="/assets/icons/Search.svg"
        alt="logo praxu"
        width={20}
        height={20}
      />
    </div>
  )
}

export default SearchBar
