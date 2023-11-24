import React from "react";
import { QuizContext } from "../QuizProvider/QuizProvider";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./Quiz.module.css";
import { motion } from "framer-motion";
let alphabet = ["A", "B", "C", "D"];
function Quiz() {
  const {
    currentQuiz,
    setStatus,
    currentQuestion,
    setCurrentQuestion,
    setScore,
    score,
  } = React.useContext(QuizContext);
  const answerInputRef = React.useRef("");

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);
  if (!currentQuiz.length) return null;

  const { question, options, answer } =
    currentQuiz[0].questions[currentQuestion];

  function handleSubmit() {
    
    if(!answerInputRef.current){
      setError(true);
      return;
    }
    setIsSubmitted(true);
    setError(false);
    if (answerInputRef.current === answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setIsSubmitted(false);
      if (currentQuestion === 9) {
        setStatus("finished");
        return;
      }
      setCurrentQuestion(currentQuestion + 1);
      answerInputRef.current = "";
    }, 1000);
  }

  return (
    <section className={styles.heroWrapper}>
      <div className={styles.questionWrapper}>
        <div>
          <p className={styles.subHead}>{`Question ${
            currentQuestion + 1
          } out of 10`}</p>
          <h1 className={styles.heading}>{question}</h1>
        </div>
        <div className={styles.progressBar}>
          <motion.div
            className={styles.progress}
            animate={{ width: `${(currentQuestion + 1) * 10}%` }}
          ></motion.div>
        </div>
      </div>
      <aside className={styles.categoriesContainer}>
        {options.map((option, index) => {
          return (
            <div key={crypto.randomUUID()}>
              <button
              style={{borderColor: isSubmitted && answer === option ? 'var(--green)' : isSubmitted && answerInputRef.current === option ? 'var(--red)' : ''}}
                className={styles.categoryWrapper}
                onClick={() => {
                  answerInputRef.current = option;
                }}
              >
                <p className={styles.orderedOption}>{alphabet[index]}</p>
                <h2>{option}</h2>
                {isSubmitted && answer === option && (
                  <img src="./images/icon-correct.svg" alt="answer" />
                )}
                {answerInputRef.current === option &&
                  isSubmitted &&
                  answer !== option && (
                    <img src="./images/icon-incorrect.svg" alt="answer" />
                  )}
              </button>
              <VisuallyHidden>{option}</VisuallyHidden>
            </div>
          );
        })}
        <div className={styles.submitWrapper}>
          <button onClick={handleSubmit} className={styles.submitButton}>
            Submit answer
          </button>
          {error && <div className={styles.errorContainer}>
          <img src="./images/icon-error.svg" />
            <p className={styles.error}>Please select an answer</p>
          </div>}
        </div>
      </aside>
    </section>
  );
}

export default Quiz;
