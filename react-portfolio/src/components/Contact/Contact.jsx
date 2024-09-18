import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css"

const Contact = () => {
  return <footer id="contacts" className={styles.container}>
    <div className={styles.text}>
        <h2 >Contact</h2>
        <p >Feel Free To  Reach</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img 
            src={getImageUrl("contact/emailIcon.png")} 
            alt="Email Icon"/>
            <a href='mailto:mayankagarwal14nov@gmail.com'>Email</a>
        </li>

        <li className={styles.link}>
            <img 
            src={getImageUrl("contact/githubIcon.png")} 
            alt="Github Icon"/>
            <a href='https://github.com/ag-mayank'>GitHub</a>
        </li>

        <li className={styles.link}>
            <img 
            src={getImageUrl("contact/linkedinIcon.png")} 
            alt="LinkedIn Icon"/>
            <a href='https://www.linkedin.com/in/mayank-agarwal-a49908244/'>LinkedIn</a>
        </li>
    </ul>
  </footer>
}

export default Contact;
