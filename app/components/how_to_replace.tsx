import React from 'react'
import styles from './styles/aboutUs.module.css';
import how_to_change from '../../public/how-to-change.webp'
import Image from 'next/image'

const How_to_replace = () => {
  return (
    <section className={styles.about_us} >
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

export default How_to_replace
