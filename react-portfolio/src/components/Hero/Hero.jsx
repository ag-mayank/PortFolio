import React, { useEffect, useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const fullText = "I am a Full Stack Developer, enthusiastic and eager to learn new technology.";
  const typingSpeed = 100; // Speed of typing
  const deletingSpeed = 50; // Speed of deleting
  const pauseTime = 1500; // Pause time before deleting

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < fullText.length) {
      // Typing the text
      timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      // Deleting the text
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && index === fullText.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && index === 0) {
      // Switch back to typing
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Mayank</h1>
        <p className={styles.description}>{text}</p>
        <a href="mailto:222120014@stu.manit.ac.in.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} className={styles.image} alt="Hero" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
