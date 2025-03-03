// npm modules
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import profilePic from '../../assets/profilePic.jpeg'

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.nameContainer}>
        <img src={profilePic} alt="" className={styles.profileImg}/>
        Walter Guerra
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
