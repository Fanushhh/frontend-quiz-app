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

  return (
    <MotionConfig reducedMotion="user">
    <main style={{backgroundColor: isDarkMode ? 'var(--dark-blue)' : ''}}>
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
