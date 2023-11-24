import React from "react";
import styles from "./QuizList.module.css";
import VisuallyHidden from "../VisuallyHidden";
import { QuizContext } from "../QuizProvider/QuizProvider";

let categories = ["html", "css", "javascript", "accessibility"];
function QuizList() {
  const { setStatus, setCategory } = React.useContext(QuizContext);
  
  function handleClick(status, category) {
    setStatus(status);
    setCategory(category);
  }
  
  return (
    <aside className={styles.categoriesContainer}>
      {categories.map((category) => {
        return (
          <div key={crypto.randomUUID()}>
            <button className={styles.categoryWrapper} onClick={() => handleClick('playing', category)}>
            <img style={{backgroundColor:`var(--${category})`}} src={`./images/icon-${category}.svg`} alt={category} />
            <h2>{category}</h2>
            </button>
            <VisuallyHidden>
              {category}
            </VisuallyHidden>
          </div>
        );
      })}
    </aside>
  );
}

export default QuizList;
