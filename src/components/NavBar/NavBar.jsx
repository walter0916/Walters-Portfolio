// npm modules
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.nameContainer}>
        Waler Guerra
      </div>
      <div className={styles.linksContainer}>
        <ul>Portfolio</ul>
        <ul>About</ul>
        <ul>Contact</ul>
      </div>
    </nav>
  )
}

export default NavBar
