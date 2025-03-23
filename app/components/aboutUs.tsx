import React from 'react'
import styles from './styles/aboutUs.module.css';
import about_us from '../../public/about-us.webp';
import how_to_change from '../../public/how-to-change.webp'
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
            <div className={styles.how_to_replace} id="howToReplace">
                <div className={styles.image}>
                    <Image src={how_to_change.src} alt="Kobieta z butelko sodastream" />
                </div>
                <div className={styles.text}>
                    <h2>Jak wymienić butle?</h2>
                    <p>
                        Wymień butlę szybko i bez wychodzenia z domu! Oferujemy dostawę już na drugi dzień.  <br /><br />

                        📌 <b>Jak to działa?</b> <br />
                        <ol>
                            <li>✔️ Podaj adres, liczbę butli oraz ich kolor (<b>niebieski lub różowy – to ważne, bo mają różne gwinty!</b>) </li>
                            <li>✔️ Wybierz przedział godzinowy dostawy  </li>
                            <li>✔️ Wieczorem otrzymasz dokładną godzinę – jeśli podasz np. <b>15:00–20:00</b>, a dostawa będzie o <b>17:00</b>, spodziewaj się jej między <b>16:30 a 17:30</b></li>
                        </ol>
                         
                        🛠️ <b>Używamy wyłącznie gazu spożywczego</b> i wymieniamy butle do wszystkich saturatorów wody.

                        Ciesz się gazowaną wodą bez wychodzenia z domu! 🥤✨
                    </p>
                </div>
            </div>
        </section>
  )
}

export default aboutUs
