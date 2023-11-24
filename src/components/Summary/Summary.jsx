import React from "react";
import { QuizContext } from "../QuizProvider/QuizProvider";
import styles from "./Summary.module.css";
import VisuallyHidden from "../VisuallyHidden";

function Summary() {
  const { score,setStatus, category, setCategory, setScore, setCurrentQuestion, setCurrentQuiz } = React.useContext(QuizContext);
  function resetQuiz(){
    setCategory("");
    setScore(0);
    setCurrentQuestion(0);
    setCurrentQuiz([]);
    setStatus("idle");
  }
  return (
    <section className={styles.summaryWrapper}>
      <div className={styles.summary}>
        <h1>Quiz completed!</h1>
        <span>You scored...</span>
      </div>
      <aside>
        <div className={styles.resultCard}>
          <div className={styles.categoryResult}>
            <img
              style={{ backgroundColor: `var(--${category})` }}
              src={`./images/icon-${category}.svg`}
              alt=""
            />
            <p>{category}</p>
          </div>
          <h2>{score}</h2>
          <p>out of 10</p>
        </div>
        <button onClick={resetQuiz}>Play again
         <VisuallyHidden>Play again</VisuallyHidden> 
        </button>
      </aside>
    </section>
  );
}

export default Summary;
