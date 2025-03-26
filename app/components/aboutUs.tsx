import React from 'react'
import styles from './styles/aboutUs.module.css';
import about_us from '../../public/about-us.webp';
import Image from 'next/image'

const aboutUs = () => {
  return (
        <section className={styles.about_us}>
            <div className={styles.about_us_content} id="aboutUs">
                <div className={styles.image}>
                    <Image src={about_us.src} alt="Sutorator sodastream - sodanow" />
                </div>
                <div className={styles.text}>
                    <h2>Kim jesteśmy?</h2>
                    <p>Jesteśmy firmą specjalizującą się w wygodnej i szybkiej wymianie butli CO2 do wszystkich saturatorów wody. Odbieramy puste butle i dostarczamy pełne, prosto pod Twoje drzwi. Wystarczy, że się z nami skontaktujesz, a my zajmiemy się resztą. Oferujemy bezpłatną dostawę, najwyższą jakość butli i konkurencyjne ceny. Dzięki wieloletniemu doświadczeniu i profesjonalnemu podejściu gwarantujemy satysfakcję. Skontaktuj się z nami już dziś i ciesz się gazowanymi napojami bez wychodzenia z domu!</p>
                </div>
            </div>
        </section>
  )
}

export default aboutUs
