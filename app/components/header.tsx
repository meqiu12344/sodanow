"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './styles/header.module.css';
import logo from '../../public/logo.webp';
import Image from 'next/image'

const Header = () => {
  const [selectedButton, setSelectedButton] = useState<HTMLElement | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const buttons = buttonsRef.current?.querySelectorAll('button');

    if (buttons) {
      buttons.forEach(button => {
        button.addEventListener('click', function() {
          if (selectedButton) {
            selectedButton.classList.remove('selected');
          }
          this.classList.add('selected');
          setSelectedButton(this);
        });
      });
    }
  }, [selectedButton]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo.src} alt="Soda Now Logo" />
      </div>

      <nav className={styles['desktop-nav']}>
        <ul>
          <li><a href="#aboutUs">Kim jesteśmy?</a></li>
          <li><a href="#howToReplace">Jak wymienić butle?</a></li>
          <li><a href="#pricing">Ile to kosztuje?</a></li>
        </ul>
      </nav>

      <button className={styles.hamburger} onClick={toggleMobileMenu}>&#9776;</button>
      <nav className={`${styles['mobile-nav']} ${isMobileMenuOpen ? styles.active : ''}`}>
        <ul>
          <li><a href="#aboutUs" onClick={() => { toggleMobileMenu(); }}>Kim jesteśmy?</a></li>
          <li><a href="#howToReplace" onClick={() => { toggleMobileMenu(); }}>Jak wymienić butle?</a></li>
          <li><a href="#pricing" onClick={() => { toggleMobileMenu(); }}>Ile to kosztuje?</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;