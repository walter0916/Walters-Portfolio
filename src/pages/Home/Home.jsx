// npm modules
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './Home.module.css'
import xWing from '../../assets/xwing-Fighter.png'
import xWingFlipped from '../../assets/xwing-Fighter-Flipped.png'

const projects = [
  {
    title: "Stadium",
    description: "This is a description of Project 1. It's an amazing project that does XYZ.",
    images: [
      "https://picsum.photos/seed/project1-1/500/400",
      "https://picsum.photos/seed/project1-2/500/400",
      "https://picsum.photos/seed/project1-3/500/400"
    ]
  },
  {
    title: "Motiva Meadow",
    description: "An innovative project that improves efficiency.",
    images: [
      "https://picsum.photos/seed/project2-1/500/400",
      "https://picsum.photos/seed/project2-2/500/400",
      "https://picsum.photos/seed/project2-3/500/400"
    ]
  },
  {
    title: "Campus Connect",
    description: "A cutting-edge app designed to revolutionize user experience.",
    images: [
      "https://picsum.photos/seed/project3-1/500/400",
      "https://picsum.photos/seed/project3-2/500/400",
      "https://picsum.photos/seed/project3-3/500/400"
    ]
  },
  {
    title: "Jedi Collector",
    description: "Leveraging AI to deliver smart solutions for everyday problems.",
    images: [
      "https://picsum.photos/seed/project4-1/500/400",
      "https://picsum.photos/seed/project4-2/500/400",
      "https://picsum.photos/seed/project4-3/500/400"
    ]
  }
]

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

      <svg viewBox="0 0 1440 320" className={styles.wave}>
        <path fill="#1a1b25" fillOpacity="1" d="M0,160L80,144C160,128,320,96,480,117.3C640,139,800,213,960,234.7C1120,256,1280,224,1360,208L1440,192V320H0Z"></path>
      </svg>

      <div className={styles.projectsContainer}>
        <div className={styles.portfolioHeader}>
          <hr className={styles.line} />
          <h1 className={styles.portfolioTitle}>Portfolio</h1>
          <hr className={styles.line} />
        </div>
  
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.projectWrapper}
            style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}
          >
            <div className={styles.projectContainer}>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                loop={true} 
                grabCursor={true} 
                className={styles.swiper}
              >
                {project.images.map((image, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <img src={image} alt={`Screenshot ${imgIndex + 1}`} className={styles.image} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className={styles.buttonContainer}>
                <button className={styles.button}>Visit</button>
                <button className={styles.button}>Code</button>
              </div>
            </div>
            <div className={styles.aboutContainer}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}

      </div>
    </main>
  )
}

export default Home
