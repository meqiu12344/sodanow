import React from 'react';
import style from './styles/hero.module.css';
import hero_image from '../../public/bottles.png';
import Image from 'next/image'

const hero = () => {
  return (
    <section className={style.hero}>
        <div className={style.hero_content}>
            <h1>Wymiana butli CO<sub>2</sub> SodaStream? <br /> Szybko, łatwo, wygodnie!</h1>
            <p>Jesteśmy Twoim lokalnym punktem wymiany butli CO<sub>2</sub> do urządzeń SodaStream. Zapewniamy szybką i wygodną wymianę pustych butli na pełne, abyś mógł cieszyć się ulubionym napojem gazowanym bez zbędnych przestojów.</p>
        </div>
        <div className={style.hero_image}>
            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop id="stop1" stopColor="rgba(19, 216, 225, 1)" offset="0%" />
                    <stop id="stop2" stopColor="rgba(247, 185, 209, 1)" offset="100%" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#sw-gradient)"
                    d="M22.6,-38.3C29.1,-35.5,34,-29,36.2,-21.9C38.5,-14.9,38.2,-7.5,38,-0.1C37.9,7.3,37.8,14.6,34.7,20.1C31.6,25.6,25.3,29.3,19,33.7C12.7,38,6.4,43,-0.4,43.7C-7.2,44.5,-14.5,41,-21.5,37.1C-28.5,33.2,-35.3,28.8,-38.5,22.5C-41.7,16.2,-41.2,8.1,-40.7,0.3C-40.2,-7.5,-39.7,-15.1,-36.2,-20.8C-32.7,-26.5,-26.3,-30.5,-19.8,-33.2C-13.3,-36,-6.6,-37.5,0.7,-38.8C8.1,-40,16.2,-41,22.6,-38.3Z"
                    width="100%"
                    height="100%"
                    transform="translate(50 50)"
                    strokeWidth="0"
                    style={{ transition: '0.3s' }}
                />
            </svg>
            <Image src={hero_image.src} alt="Butelki Soda Now" />
        </div>
    </section>
  )
}

export default hero;
