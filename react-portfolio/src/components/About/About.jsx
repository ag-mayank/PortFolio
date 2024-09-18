import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png") } alt="Me sitting with the laptop" className={styles.aboutImage}/></div>
        <ul className={styles.Items}>
            <li className={styles.Item}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor is not there" className={styles.cursorImage}/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                        I am a  Frontend Developer with experience in building responsive and optimize sites
                    </p>
                </div>
            </li>
            <li className={styles.Item}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server"/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>
                        I am a Backend Developer as well with experience in developing fast and optimised APIs
                    </p>
                </div>
            </li>
            <li className={styles.Item}>
                <img src={getImageUrl("about/uiIcon.png")} alt="UI"/>
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>
                        I am UI Designer as well like 
                        to gave interactive design into the webpage
                    </p>
                </div>
            </li>

        </ul>
    </section>
  );
}

export default About;
