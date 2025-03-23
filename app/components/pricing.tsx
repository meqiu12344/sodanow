import React from 'react';
import styles from './styles/pricing.module.css';

const Pricing = () => {
    return (
        <section id="pricing" className={styles.pricing}>
            <h2>Ile to kosztuje?</h2>
            <div className={styles.pricingCards}>
                <div className={styles.pricingCard}>
                    <div className={styles.price}>30 PLN</div>
                    <div className={styles.per}>Za butelkę</div>
                    <h3>Pakiet Standard</h3>
                    <ul>
                        <li>Wymiana butli CO2 z dostawą do domu w ciągu 24-48 godzin</li>
                        <li>Bezpłatny odbiór pustych butli</li>
                        <li>Możliwość płatności gotówką lub kartą przy odbiorze</li>
                    </ul>
                    <div className={styles.buttonContainer}>
                        <button className={styles.callButton}>ZADZWOŃ</button>
                    </div>
                </div>
                <div className={styles.pricingCard}>
                    <div className={styles.price}>60 PLN</div>
                    <div className={styles.per}>Przy zakupie 3</div>
                    <h3>Pakiet 2 + 1</h3>
                    <ul>
                        <li>Zamów 2 butle CO2, a trzecią otrzymasz gratis!</li>
                        <li>Bezpłatny odbiór pustych butli</li>
                        <li>Możliwość płatności online, gotówką lub kartą przy odbiorze</li>
                        <li>Dodatkowy rabat 10% na kolejne zamówienie</li>
                    </ul>
                    <div className={styles.buttonContainer}>
                        <button className={styles.callButton}>ZADZWOŃ</button>
                    </div>
                </div>
                <div className={styles.pricingCard}>
                    <div className={styles.price}>120 PLN</div>
                    <div className={styles.per}>Za miesiąc</div>
                    <h3>Pakiet Subskrypcja</h3>
                    <ul>
                        <li>Regularna wymiana butli CO2 co dwa tygodnie</li>
                        <li>Bezpłatny odbiór pustych butli</li>
                        <li>Możliwość płatności automatycznej online</li>
                        <li>Dodatkowo: bezpłatna dostawa</li>
                    </ul>
                    <div className={styles.buttonContainer}>
                        <button className={styles.callButton}>ZADZWOŃ</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;