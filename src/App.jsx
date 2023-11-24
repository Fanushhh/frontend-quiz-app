import { useState, useContext } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/index";
import Quiz from "./components/Quiz/index";
import { QuizContext } from "./components/QuizProvider/QuizProvider";
import Summary from "./components/Summary/index";
import { MotionConfig } from "framer-motion";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { status } = useContext(QuizContext);
  document.body.style.backgroundColor = isDarkMode ? 'var(--dark-blue)' : 'var(--light-gray)';
  document.body.style.color = isDarkMode ? 'var(--white)' : 'var(--very-dark-blue)';
  document.body.style.backgroundImage = isDarkMode ? "url('./images/pattern-background-desktop-dark.svg')" : "url('./images/pattern-background-desktop-light.svg')";
  
  return (
    <MotionConfig reducedMotion="user">
    <main>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {status === "playing" ? (
        <Quiz />
      ) : status === "finished" ? (
        <Summary />
      ) : (
        <Hero />
      )}
    </main>
    </MotionConfig>
  );
}

export default App;
