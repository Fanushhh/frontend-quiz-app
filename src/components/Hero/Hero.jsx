import React from 'react';
import styles from './Hero.module.css';
import QuizList from '../QuizList/index';

function Hero() {
  
  return <section className={styles.heroWrapper}>
    
    <div >
      <h1 className={styles.heading}>Welcome to the <span>Frontend Quiz!</span></h1>
      <p className={styles.subHead}>Pick a subject to get started</p>
    </div>
    <QuizList type="homepage"/>
  </section>;
}

export default Hero;
