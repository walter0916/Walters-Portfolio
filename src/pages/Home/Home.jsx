// npm modules
import { motion } from 'framer-motion'
import styles from './Home.module.css'
import xWing from '../../assets/xwing-Fighter.png'
import xWingFlipped from '../../assets/xwing-Fighter-Flipped.png'
const Home = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.container}>
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
      </div>

      <div className={styles.projectsContainer}>
        
        <div className={styles.projectWrapper}>
          <div className={styles.projectContainer}>
            <img src="https://picsum.photos/seed/project1/500/400" alt="Project 1" className={styles.image}/>
            <div className={styles.buttonContainer}>
              <button className={styles.button}>Visit</button>
              <button className={styles.button}>Code</button>
            </div>
          </div>
          <div className={styles.aboutContainer}>
            <h3>Project 1</h3>
            <p>This is a description of Project 1. It's an amazing project that does XYZ.</p>
          </div>
        </div>

        <div className={styles.projectWrapper} style={{ flexDirection: 'row-reverse' }}>
          <div className={styles.projectContainer}>
            <img src="https://picsum.photos/seed/project2/500/400" alt="Project 2" className={styles.image}/>
            <div className={styles.buttonContainer}>
              <button className={styles.button}>Visit</button>
              <button className={styles.button}>Code</button>
            </div>
          </div>
          <div className={styles.aboutContainer}>
            <h3>Project 2</h3>
            <p>This is a description of Project 2. It's an innovative project that improves efficiency.</p>
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <div className={styles.projectContainer}>
            <img src="https://picsum.photos/seed/project3/500/400" alt="Project 3" className={styles.image}/>
            <div className={styles.buttonContainer}>
              <button className={styles.button}>Visit</button>
              <button className={styles.button}>Code</button>
            </div>
          </div>
          <div className={styles.aboutContainer}>
            <h3>Project 3</h3>
            <p>Project 3 is a cutting-edge app designed to revolutionize user experience.</p>
          </div>
        </div>

        <div className={styles.projectWrapper} style={{ flexDirection: 'row-reverse' }}>
          <div className={styles.projectContainer}>
            <img src="https://picsum.photos/seed/project4/500/400" alt="Project 4" className={styles.image}/>
            <div className={styles.buttonContainer}>
              <button className={styles.button}>Visit</button>
              <button className={styles.button}>Code</button>
            </div>
          </div>
          <div className={styles.aboutContainer}>
            <h3>Project 4</h3>
            <p>Project 4 leverages AI to deliver smart solutions for everyday problems.</p>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Home
