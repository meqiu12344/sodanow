import React from 'react';
import styles from './styles/pricing.module.css';

const Pricing = () => {
    return (
        <section id="pricing" className={styles.pricing}>
            <h2>Ile to kosztuje?</h2>
            <div className={styles.pricingCards}>
                <div className={styles.pricingCard}>
                    <div className={styles.price}>25 PLN</div>
                    <div className={styles.per}>Za butelkę</div>
                    <h3>Pakiet Standard</h3>
                    <ul>
                        <li>Wymiana butli CO2 z dostawą do domu w ciągu 24-48 godzin</li>
                        <li>Bezpłatny odbiór pustych butli</li>
                        <li>Możliwość płatności gotówką przy odbiorze</li>
                    </ul>
                    <div className={styles.buttonContainer}>
                        <a href="tel:607877035" className={styles.callButton}>ZADZWOŃ</a>
                    </div>
                </div>
                <div className={styles.pricingCard}>
                    <div className={styles.price}>75 PLN</div>
                    <div className={styles.per}>Przy zakupie 4 butli</div>
                    <h3>Pakiet 3 + 1</h3>
                    <ul>
                        <li>Zamów 3 butle CO2, a czwartą otrzymasz gratis!</li>
                        <li>Bezpłatny odbiór pustych butli</li>
                        <li>Możliwość płatności gotówką przy odbiorze</li>
                        <li>Dodatkowy rabat 10% na kolejne zamówienie</li>
                    </ul>
                    <div className={styles.buttonContainer}>
                        <a href="tel:607877035" className={styles.callButton}>ZADZWOŃ</a>
                    </div>
                </div>
                <div className={styles.pricingCard}>
                    <div className={styles.price}>125 PLN</div>
                    <div className={styles.per}>Przy zakupie 5 butli</div>
                    <h3>Pakiet 5 + 1</h3>
                    <ul>
                        <li>Zamów 5 butle CO2, a szóstą otrzymasz gratis!</li>
                        <li>Bezpłatny odbiór pustych butli</li>
                        <li>Możliwość płatności gotówką przy odbiorze</li>
                        <li>Dodatkowy rabat 10% na kolejne zamówienie</li>
                    </ul>
                    <div className={styles.buttonContainer}>
                        <a href="tel:607877035" className={styles.callButton}>ZADZWOŃ</a>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Pricing;