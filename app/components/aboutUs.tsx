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
            <p>Jesteśmy firmą specjalizującą się w wygodnej i szybkiej wymianie butli CO2 do urządzeń Sodastream. Odbieramy puste butle i dostarczamy pełne, prosto pod Twoje drzwi. Wystarczy, że się z nami skontaktujesz, a my zajmiemy się resztą. Oferujemy bezpłatną dostawę, najwyższą jakość butli i konkurencyjne ceny. Dzięki wieloletniemu doświadczeniu i profesjonalnemu podejściu gwarantujemy satysfakcję. Skontaktuj się z nami już dziś i ciesz się gazowanymi napojami bez wychodzenia z domu!</p>
        </div>
    </div>
    <div className={styles.how_to_replace} id="howToReplace">
        <div className={styles.image}>
            <Image src={how_to_change.src} alt="Kobieta z butelko sodastream" />
        </div>
        <div className={styles.text}>
            <h2>Jak wymienić butle?</h2>
            <p>Wymiana butli CO2 w 4 prostych krokach:</p>
            <ol>
                <li><b>Kontakt:</b> Zadzwoń lub napisz do nas.</li>
                <li><b>Zamówienie:</b> Określ liczbę butli i wybierz termin dostawy.</li>
                <li><b>Dostawa/Odbiór:</b> Kurier wymieni puste butle na pełne.</li>
                <li><b>Płatność:</b> Zapłać gotówką lub przelewem.</li>
            </ol>
            <p>Szybko, wygodnie i bez wychodzenia z domu!</p>
        </div>
    </div>
</section>
  )
}

export default aboutUs
