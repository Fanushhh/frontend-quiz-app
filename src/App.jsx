import { useState, useContext } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/index";
import Quiz from "./components/Quiz/index";
import { QuizContext } from "./components/QuizProvider/QuizProvider";
import Summary from "./components/Summary/index";
import { MotionConfig } from "framer-motion";
import useLocalStorage from "use-local-storage";
function App() {
  
  const { status } = useContext(QuizContext);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'light' : 'dark');
  
  function switchTheme(){
    setTheme(theme === "light" ? "dark" : "light");
  }
  document.body.dataset.theme = theme;
  document.body.style.overflow = status === "finished" ? 'hidden' : 'auto';
  return (
    <MotionConfig reducedMotion="user">
    <div className={styles.app} data-theme={theme}>
      <main >
        <Navbar theme={theme} switchTheme={switchTheme} />
        {status === "playing" ? (
          <Quiz />
        ) : status === "finished" ? (
          <Summary />
        ) : (
          <Hero />
        )}
      </main>
    </div>
    </MotionConfig>
  );
}

export default App;
