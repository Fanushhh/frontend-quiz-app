import React from "react";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";
import VisuallyHidden from "../VisuallyHidden/index";
import { QuizContext } from "../QuizProvider/QuizProvider";
const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const darkModeRef = React.useRef();
  const { category } = React.useContext(QuizContext);
  React.useEffect(() => {
    if(!darkModeRef.current) return;
    function handleKeyDown(e){
      if (e.key === "Enter" || e.key === "Space" || e.key === " ") {
        setIsDarkMode(!isDarkMode);
      }
    }
    darkModeRef.current.addEventListener('keydown', handleKeyDown)

    return () => darkModeRef.current.removeEventListener('keydown',handleKeyDown)
  },[isDarkMode])
  

  return (
    <nav className={styles.nav}>
      <div className={styles.categoryWrapper}>
        <img style={{backgroundColor:`var(--${category})`}} src={`/images/icon-${category}.svg`} alt={category} />
        <span>{category}</span>
      </div>
      <div  className={styles.darkModeWrapper}>
      <motion.img
          initial={{scale: 1}}
          animate={{scale: isDarkMode ? 1 : 1.3, rotate: isDarkMode ? 0 : 180}}
          transition={{duration:0.5}}
          src="./images/icon-sun-dark.svg"
          alt="icon with a sun for a dark/light mode switch"
        />
        <motion.div animate={{backgroundColor: isDarkMode ? 'var(--white)': 'var(--violet)'}}>
        <button  ref={darkModeRef} className={styles.button}>
          <motion.span
            transition={{
            type: "spring",
            stiffness:300,
            damping:20,
            tension:50,
            }}
            animate={{ x: isDarkMode ? "100%" : "0%", backgroundColor: isDarkMode ? 'var(--violet)' : 'var(--white)' }}
            onClick={() => setIsDarkMode(!isDarkMode)}
          ></motion.span>
          <VisuallyHidden>Dark mode/Light mode toggle</VisuallyHidden>
          </button>
        </motion.div>
        <motion.img
        animate={{scale: isDarkMode ? 1.3 : 1,  rotate: isDarkMode ? 0 : 180}}
        transition={{duration:0.5}}
          src="./images/icon-moon-dark.svg"
          alt="icon with a moon for a dark/light mode switch"
        />
        
      </div>
    </nav>
  );
};

export default Navbar;
