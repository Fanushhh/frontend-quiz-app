import React from "react";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";
import VisuallyHidden from "../VisuallyHidden/index";
import { QuizContext } from "../QuizProvider/QuizProvider";
const Navbar = ({ theme, switchTheme }) => {
  const darkModeRef = React.useRef();
  const { category } = React.useContext(QuizContext);
  let icon = theme === "dark" ? "light" : "dark";
  React.useEffect(() => {
    if(!darkModeRef.current) return;
    function handleKeyDown(e){
      if (e.key === "Enter" || e.key === "Space" || e.key === " ") {
        switchTheme();
      }
    }
    darkModeRef.current.addEventListener('keydown', handleKeyDown)

    return () => darkModeRef.current.removeEventListener('keydown',handleKeyDown)
  },[theme])
  

  return (
    <nav className={styles.nav}>
      <div className={styles.categoryWrapper}>
        <img style={{backgroundColor:`var(--${category})`}} src={`/images/icon-${category}.svg`} alt={category} />
        <span>{category}</span>
      </div>
      <div  className={styles.darkModeWrapper}>
      <motion.img
          initial={{scale: 1}}
          animate={{scale: theme === "light" ? 1.3 : 1, rotate: theme === "light" ? 0 : 180}}
          transition={{duration:0.5}}
          src={`./images/icon-sun-${icon}.svg`}
          alt="icon with a sun for a dark/light mode switch"
        />
        <motion.div animate={{backgroundColor: theme === "dark" ? 'var(--white)': 'var(--violet)'}}>
        <button  ref={darkModeRef} className={styles.button}>
          <motion.span
            transition={{
            type: "spring",
            stiffness:300,
            damping:20,
            tension:50,
            }}
            animate={{ x: theme === "dark" ? "100%" : "0%", backgroundColor: theme === "dark" ? 'var(--violet)' : 'var(--white)' }}
            onClick={switchTheme}
          ></motion.span>
          <VisuallyHidden>Dark mode/Light mode toggle</VisuallyHidden>
          </button>
        </motion.div>
        <motion.img
        animate={{scale: theme === "dark" ? 1.3 : 1,  rotate: theme === "dark" ? 0 : 180}}
        transition={{duration:0.5}}
          src={`./images/icon-moon-${icon}.svg`}
          alt="icon with a moon for a dark/light mode switch"
        />
        
      </div>
    </nav>
  );
};

export default Navbar;
