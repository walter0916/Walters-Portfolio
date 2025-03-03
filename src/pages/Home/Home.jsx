// npm modules
import { motion } from 'framer-motion'
import styles from './Home.module.css'
import xWing from '../../assets/xwing-Fighter.png'
import xWingFlipped from '../../assets/xwing-Fighter-Flipped.png'
const Home = () => {
  return (
    <main className={styles.container}>
      <motion.img 
        src={xWing} 
        alt="X-Wing Fighter"
        className={styles.xWing}
        initial={{ x: '100vw', opacity: 1 }}
        animate={{ x: '-100vw', opacity: 0 }}
        transition={{ duration: 5.5, ease: 'easeInOut' }}
      />
      <motion.h1 
        className={styles.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1.5 }}
      >
        Hello I'm Walter 👋
      </motion.h1>

      <motion.img 
        src={xWingFlipped} 
        alt="X-Wing Fighter"
        className={styles.xWing}
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: '100vw', opacity: 1 }}
        transition={{ delay: 3.5, duration: 5.5, ease: 'easeInOut' }}
      />

      <motion.h2 
        className={styles.summary}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 7, duration: 1.5 }}
      >
        I'm a passionate <span> Software Engineer </span> from New York
      </motion.h2>
    </main>
  )
}

export default Home

