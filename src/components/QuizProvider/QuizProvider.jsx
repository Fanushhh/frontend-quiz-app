import React from 'react';
export const QuizContext = React.createContext();
import data from '../../data.json';


function QuizProvider({children}){
    const [category, setCategory] = React.useState('');
    const [currentQuiz, setCurrentQuiz] = React.useState([]);
    const [score, setScore] = React.useState(0);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [status, setStatus] = React.useState('idle');
    const [answerInput, setAnswerInput] = React.useState('');

    React.useEffect(() => {
        if(category){
            const newQuiz = data.quizzes.filter((quiz) => quiz.title.toLowerCase() === category.toLowerCase());
            newQuiz[0].questions.sort(() => Math.random() - 0.5);
            newQuiz[0].questions.forEach((question) => {
                question.options.sort(() => Math.random() - 0.5);
            });
            
            setCurrentQuiz(newQuiz);
        }
    
    },[category])
    
    
    return(
        <QuizContext.Provider value={{
            category,
            setCategory,
            setCurrentQuiz,
            currentQuiz,
            score,
            setScore,
            currentQuestion,
            setCurrentQuestion,
            status,
            setStatus,
            answerInput,
            setAnswerInput,
        }}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizProvider;