import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Set initial state based on screen size

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);

      // Close the menu if resizing to a larger screen
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        {isMobile && (
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl('nav/closeIcon.png')
                : getImageUrl('nav/menuIcon.png')
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
        <ul
          className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
